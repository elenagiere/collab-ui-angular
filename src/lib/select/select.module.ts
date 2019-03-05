import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import { ButtonModule } from '../button';
import { IconModule } from '../icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { ListModule } from '../list';
// import { SelectListOverlayComponent } from './select-list-overlay.component';
// import { SelectListOverlayService } from './select-list-overlay.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    PortalModule,
    ListModule,
    OverlayModule,
    A11yModule,
  ],
  declarations: [
    SelectComponent,
    // SelectListOverlayComponent
  ],
  exports: [SelectComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    // SelectListOverlayService
  ],
  entryComponents: [
    // SelectListOverlayComponent
  ]
})
export class SelectModule {}
