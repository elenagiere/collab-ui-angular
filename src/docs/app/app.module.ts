import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { AlertModule } from '@collab-ui/angular';
import { AlertService } from '@collab-ui/angular';
import { BadgeModule } from '@collab-ui/angular';
import { IconModule } from '@collab-ui/angular';
import { ListModule } from '@collab-ui/angular';
import { ListItemModule } from '@collab-ui/angular';
import { ListItemSectionModule } from '@collab-ui/angular';
import { SpinnerModule } from '@collab-ui/angular';
import { InputModule } from '@collab-ui/angular';
import { InputErrorModule } from '@collab-ui/angular';
import { LabelModule } from '@collab-ui/angular';
import { InputHelperModule } from '@collab-ui/angular';

import { FormsModule } from '@angular/forms';
import { LoadingModule } from '@collab-ui/angular';
import { ButtonModule } from '@collab-ui/angular';

import { ModalModule } from '@collab-ui/angular';
import { ModalBodyModule } from '@collab-ui/angular';
import { ModalHeaderModule } from '@collab-ui/angular';
import { ModalFooterModule } from '@collab-ui/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    OverlayModule,
    PortalModule,
    AppRoutingModule,
    AlertModule,
    BadgeModule,
    ButtonModule,
    FormsModule,
    IconModule,
    InputErrorModule,
    InputModule,
    LabelModule,
    ListItemModule,
    ListItemSectionModule,
    ListModule,
    LoadingModule,
    ModalBodyModule,
    ModalFooterModule,
    ModalHeaderModule,
    ModalModule,
    SpinnerModule,
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ AlertService ]
})
export class AppModule { }
