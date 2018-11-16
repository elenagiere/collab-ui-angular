import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  EventEmitter,
  Output
} from '@angular/core';

import { chain, find, trimEnd, uniqueId } from 'lodash';

import * as iconNames from '@collab-ui/icons/data/iconNames.json';
import * as  colors from '@collab-ui/core/data/colors.json';

@Component({
  selector: 'cui-icon',
  template: `
  <i
  *ngIf="!isClickable"
  class={{classes}}
  [style.color]="getColor()"
  aria-labelledby="getAriaLabelledBy()"
  aria-label="getAriaLabel()">
</i>

<button
  *ngIf="isClickable"
  class={{buttonClasses}}
  aria-labelledby="getAriaLabelledBy()"
  aria-label="getAriaLabel()">
  <i  class={{classes}}
      [style.color]="getColor()">
  </i>
</button>
`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class IconComponent implements OnInit {
  @Input() public ariaLabel: string;
  @Input() public buttonClassName: string;
  @Input() public color: string;
  @Input() public className: string;
  @Input() public description: string;
  @Input() public name: string;
  @Input() public size: number;
  @Input() public fontSize: number;
  @Input() public title: string;
  @Input() public type: string;

  @Output() click = new EventEmitter();

  public classes: string;
  public buttonClasses: string;
  public titleId: string;
  public descId: string;
  public isClickable: boolean;

  constructor() { }

  ngOnInit() {
    // input validations
    if (!this.name) { throw new Error('Attribute "name" is required'); }
    if (this.type && this.type !== 'white' && this.type !== '') { throw new Error('Attribute "type" if defined is either "" or "white"'); }

    this.isClickable = this.click.observers.length > 0;

    this.classes =
      'cui-icon icon' +
      `${(this.name && ` ${this.getIconNameClass()}`) || ''}` +
      `${(this.className && ` ${this.className}`) || ''}` +
      ``;

    this.buttonClasses =
      'cui-button cui-button--icon' +
      `${(this.type && ` cui-button--icon-${this.type}`) || ''}` +
      `${(this.buttonClassName && ` ${this.buttonClassName}`) || ''}` +
      ``;

    const iconCount = uniqueId();
    this.titleId = `icon-title-${iconCount}`;
    this.descId = this.description ? `icon-desc-${iconCount}` : undefined;
  }

  private getIconNameClass = () => {
    const defaultSize = 16;
    const sizeFromName = Number(this.name.split('_')[1]);

    let nameWithSize = this.name;
    if (sizeFromName && this.fontSize) { nameWithSize =  `${this.name.split('_')[0]}_${this.fontSize}`; }
    if (!sizeFromName) { nameWithSize = `${this.name}_${(this.size || defaultSize)}`; }

    const lookupIconName = nameWithSize.replace(/^(icon-)/, '');
    const iconNameClass = `icon-${lookupIconName}`;

    // validate Icon name with Collab Toolkit
    if ((<any>iconNames).default.indexOf(lookupIconName) < 0) {
      this.consoleHandler('name-error', nameWithSize);
    }

    return iconNameClass;
  }

  private isolateRoot = (str) => {
    return chain(str)
      .trimStart('$')
      .split('-')
      .value()[0];
  }

  private getColorSpec = (colorObj) => {
    return colorObj.hex
      ? colorObj.hex
      : colorObj.opacity && this.isolateRoot(colorObj.variable) === 'white'
        ? `rgba(255, 255, 255, ${colorObj.opacity / 100})`
        : `rgba(0, 0, 0, ${colorObj.opacity / 100})`;
  }

  private getHexFromJSON = (colorName) => {
    for (const c of (<any>colors).default) {
      const variation = find(c.variations, ['variable', colorName]);

      if (variation) { return this.getColorSpec(variation); }
    }

    return this.consoleHandler('color-error', colorName);
  }

  private formatColor () {
    return this.color.startsWith('$')
      ? this.color
      : this.color.endsWith('-base')
        ? trimEnd(this.color, '-base')
        : `$${this.color}`;
  }

  public getColor = () => {
    if (!this.color) { return ''; }

    if (this.color.startsWith('#')) {
      this.consoleHandler('color-warn', this.color);
      return this.color;
    }
    return this.getHexFromJSON(this.formatColor());
  }

  public getAriaLabelledBy = () => {
    const { ariaLabel, title, description, titleId, descId } = this;

    if (!ariaLabel) {
      if (title && description) { return (`${titleId} ${descId}`); }
      if (title) { return (`${titleId}`); }
      if (description) { return (`${descId}`); }
    }
    return null;
  }

  public consoleHandler = (message, data) => {
    switch (message) {
      case 'color-warn':
        console.warn(
          `[@collab-ui/angular] Icon: ${data} may not exist in the design system,` +
            ` please use a color name from http://collab-ui.cisco.com/styles/colors`
        );
        break;
      case 'color-error':
        console.warn(
          `[@collab-ui/angular] Icon: ${data} does not exist in the design system,` +
            ` please use a color name from http://collab-ui.cisco.com/styles/colors`
        );
        break;
        case 'name-error':
        console.warn(
          `[@collab-ui/angular] Icon: Icon ${data} does not exist in the design system.` +
            ` Visit https://icons.collab-ui.com for a list of available icons or to request a new icon.`
        );
        break;
    }
  }
}

/**
* @name Default Icons
* @description Default state of icon.

* @component icon
* @section default

@ts

<h3>Icon</h3>
<div>
    <cui-icon name='accessories_16'></cui-icon>
    <cui-icon name='accessories_20'></cui-icon>
    <cui-icon name='accessories_36'></cui-icon>
    <cui-icon name='accessories_56'></cui-icon>
</div>
<h3>Icon with Color</h3>
<div>
    <cui-icon name='accessories_16' color="blue"></cui-icon>
    <cui-icon name='accessories_20' color="cyan"></cui-icon>
    <cui-icon name='accessories_36' color="purple"></cui-icon>
    <cui-icon name='accessories_56' color="red"></cui-icon>
</div>
<h3>Icon with onClick</h3>
<div>
    <cui-icon name='accessories_16' color='blue' ariaLabel='Accessories' (click)="onClick()"></cui-icon>
    <cui-icon name='accessories_20' color='blue' ariaLabel='Accessories' (click)="onClick()"></cui-icon>
    <cui-icon name='accessories_36' color='blue' ariaLabel='Accessories' (click)="onClick()"></cui-icon>
    <cui-icon name='accessories_56' color='blue' ariaLabel='Accessories' (click)="onClick()"></cui-icon>
</div>
<h3>Icon with Click Type</h3>
<div>
    <div className='row'>
      <div>Default</div>
      <div style="padding: '5px'">
        <cui-icon name='clear-active_24' ariaLabel='Clear' (click)="onClick()"></cui-icon>
      </div>
    </div>
    <div className='row'>
      <div>Type(white)</div>
      <div [ngStyle]="{ backgroundColor: 'black', padding: '5px', width: 'fit-content' }">
        <cui-icon name='clear-active_24' ariaLabel='Clear' type='white' (click)="onClick()"></cui-icon>
      </div>
    </div>
</div>
<h3>Icon with size prop</h3>
<p>Icon name="icon-info" with size prop 24</p>
<p>equals name="icon-info_24"</p>
<cui-icon name='icon-info' size=24 color='blue' ariaLabel='Accessories' type='white'></cui-icon>

<h3>Icon with fontSize</h3>
<p>name="icon-info_16" with fontSize overriding size with 32</p>
<p>equals name="icon-info_32"</p>
<cui-icon name='icon-info_16' fontSize=32 color='blue' ariaLabel='Accessories' type='white'></cui-icon>

<h3>Icon with every prop</h3>
<cui-icon
    ariaLabel='ariaLabel'
    buttonClassName='button-class-name'
    color='purple'
    className='class-name'
    description='description'
    name='accessories_56'
    (click)="onClick()"
    size=24
    fontSize=36
    title='title'
    type=''>
</cui-icon>
**/
