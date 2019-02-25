import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectOptionComponent } from './select-option.component';
import { ListItemModule } from '../list-item';

@NgModule({
  declarations: [SelectOptionComponent],
  imports: [
    CommonModule,
    ListItemModule
  ],
  exports: [SelectOptionComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SelectOptionModule { }
