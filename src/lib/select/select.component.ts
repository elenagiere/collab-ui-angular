import { Component, Input, HostBinding} from '@angular/core';

import {uniqueId} from 'lodash';

interface IState {
  isOpen: boolean;
  selected?: any;
  selectedIndex: any;
  anchorNode: null;
  anchorWidth: null;
  id: null;
}

@Component({
  selector: 'cui-select',
  template: `
    <button cui-button
        cdkOverlayOrigin
        #trigger="cdkOverlayOrigin"
        [attr.name]='state.id'
        aria-label="select button"
        [id]='state.id'
        (click)='isOpen = !isOpen'
        class={{buttonClasses}}
        active='isOpen'
        type="button"
        >
          <div class='cui-select__label' id="{{state.id}}__label">
              {{currentValue() || defaultValue}}
              <cui-icon name="arrow-down_16"></cui-icon>
          </div>
    </button>

    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayOrigin]="trigger"
      [cdkConnectedOverlayOpen]="isOpen">
      <cui-list>
        <ng-content></ng-content>
      </cui-list>
    </ng-template>
  `,
  styles: []
})
export class SelectComponent {
  isOpen = false;
  selectedListItem = '';

  @Input() public class = '';
  @Input() public defaultValue: string = null;
  @Input() public id: string = null;
  @Input() public isDynamic = false;
  @Input() public isMulti = false;
  // onSelect
  @Input() public overlayProps: object = {};

  @HostBinding('class') classes = 'cui-input-group cui-select';

  public state: IState;

  constructor() {
    this.state = {
      isOpen: false,
      selected: [],
      selectedIndex: [],
      anchorNode: null,
      anchorWidth: null,
      id: this.id || uniqueId('cui-select-')
    };
  }

  public currentValue = () => {
    const { selected } = this.state;
    if (!this.isMulti && selected.length) { return selected[0].label; }

    if (selected.length === 1) {
      return `${selected.length} Item Selected`;
    } else if (selected.length) {
      return `${selected.length} Items Selected`;
    }
  }

  public get buttonClasses(): string {
    return 'cui-button--input' +
    ' cui-button cui-button--36' +
    `${(this.class && ` ${this.class}`) || ''}`;
  }
}
