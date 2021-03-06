import * as fs from 'fs';
import { join } from 'path';
import { Rule, Tree, chain, SchematicContext } from '@angular-devkit/schematics';
import { getWorkspace } from '@schematics/angular/utility/config';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema } from './schema';
import { red, italic } from '@angular-devkit/core/src/terminal';
import {
  getProjectFromWorkspace,
  getProjectStyleFile,
  addModuleImportToRootModule,
  addModuleImportToModule
} from '@angular/cdk/schematics';
import { addPackageToPackageJson } from './package-config';

// Determine where to load the package.json, if doing local dev or not
let corePackage: any;
if (fs.existsSync(join(__dirname, '../../package.json'))) {
  corePackage = require('../../package.json');
} else {
  corePackage = require('../../../../package.json');
}

export default function (options: any): Rule {
  return chain([
    addCollabUIDependencies(options),
    addModuleImport(options),
    addCollabUIAppStyles(options),
  ]);
}


function addCollabUIDependencies(options: Schema) {
  return (tree: Tree, context: SchematicContext) => {
    addPackageToPackageJson(tree, '@collab-ui/angular', `^${corePackage.version}`);
    // add installation task
    if (!options.skipInstall) {
      context.addTask(new NodePackageInstallTask());
    }
    return tree;
  };
}

function addModuleImport(options: Schema) {
  return (tree: Tree) => {
    const workspace = getWorkspace(tree);
    const project = getProjectFromWorkspace(workspace, options.project);
    if (options.module) {
      addModuleImportToModule(tree, options.module, 'BadgeModule', '@collab-ui/angular');
    } else {
      addModuleImportToRootModule(tree, 'BadgeModule', '@collab-ui/angular', project);
    }
    return tree;
  };
}

function addCollabUIAppStyles(options: Schema) {
  return (host: Tree) => {
    const workspace = getWorkspace(host);
    const project = getProjectFromWorkspace(workspace, options.project);
    const styleFilePath = getProjectStyleFile(project);

    if (!styleFilePath) {
      console.warn(red(`Could not find the default style file for this project.`));
      console.warn(red(`Please consider manually including collab-ui styles in the project.`));
      return;
    }

    const buffer = host.read(styleFilePath);

    if (!buffer) {
      console.warn(red(`Could not read the default style file within the project ` +
        `(${italic(styleFilePath)})`));
      console.warn(red(`Please consider manually including collab-ui styles in the project.`));
      return;
    }

    const htmlContent = buffer.toString();
    const insertion = '\n' +
      `$brand-font-folder: '~@collab-ui/core/fonts';\n` +
      `$icon-font-path: '~@collab-ui/icons/fonts';\n` +
      `$images-path: '~@collab-ui/core/images';\n\n` +
      `@import '~@collab-ui/core/scss/collab-ui';`;

    if (htmlContent.includes(insertion)) {
      return;
    }

    const recorder = host.beginUpdate(styleFilePath);

    recorder.insertLeft(htmlContent.length, insertion);
    host.commitUpdate(recorder);
  };
}
