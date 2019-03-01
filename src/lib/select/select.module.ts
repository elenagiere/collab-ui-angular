import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ButtonModule } from '../button';
import { IconModule } from '../icon';
// import { SelectOptionOverlayService } from './select-option-overlay/select-option-overlay.service';
// import { SelectOptionOverlayComponent } from './select-option-overlay';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    IconModule
  ],
  declarations: [SelectComponent],
  exports: [SelectComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  entryComponents: []
})
export class SelectModule { }
