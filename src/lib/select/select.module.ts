import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { SelectOptionOverlayService } from './select-option-overlay/select-option-overlay.service';
import { SelectOptionOverlayComponent } from './select-option-overlay';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SelectComponent, SelectOptionOverlayComponent],
  exports: [SelectComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [SelectOptionOverlayService],
  entryComponents: [SelectOptionOverlayComponent]
})
export class SelectModule { }
