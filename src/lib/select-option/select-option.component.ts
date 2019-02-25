import { Component, OnInit, Input } from '@angular/core';
import { uniqueId } from 'lodash';

@Component({
  selector: 'cui-select-option',
  template: `
  <div cui-list-item [class]="class" [id]="id" [title]="myTitle">
    <cui-list-item-section key="child-0" position='center'>
        <span *ngIf="label; else content">{{label}}</span>
        <ng-template #content>
            <ng-content></ng-content>
        </ng-template>
    </cui-list-item-section>
    <cui-list-item-section key="child-1" position='right'>
        <cui-icon *ngIf="active" name="check_20" color="blue"></cui-icon>
    </cui-list-item-section>
  </div>
  `,
  styles: []
})
export class SelectOptionComponent implements OnInit {

  constructor() { }

  /** @option boolean that determines active state | false */
  @Input() active = false;
  /** @option optional css class name | '' */
  @Input() class = '';
    /** @option SelectOption ID | '' */
  @Input() id = uniqueId('cui-select-option-');
  // @HostBinding('attr.id') @Input() id: string = uniqueId('cui-list-item-');
    /** @option Optional prop to know if multiple SelectOptions can be active | false */
  @Input() isMulti = false;
    /** @option SelectOption label text | '' */
  @Input() label = '';
    /** @option ListItem Title | '' */
  @Input() title = '';
    /** @option SelectOption value | '' */
  @Input() value = '';

  ngOnInit() {}

  public get myTitle(): string {
    return this.title || this.label;
  }
}
