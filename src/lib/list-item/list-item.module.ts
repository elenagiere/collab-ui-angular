import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item.component';
import { IconModule } from '../icon';
import { ListItemSectionModule} from '../list-item-section';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ListItemSectionModule
  ],
  declarations: [ListItemComponent],
  exports: [ListItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListItemModule { }
