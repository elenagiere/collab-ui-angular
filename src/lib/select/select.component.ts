import {Component, Input, HostBinding, ViewChild, AfterContentChecked,
  ContentChildren, QueryList, ChangeDetectorRef} from '@angular/core';

import { uniqueId, find, filter, isEqual } from 'lodash';
import { ButtonComponent } from '../button';
import { ListItemComponent } from '../list-item';
import { ListService } from '../list';

interface IState {
  isOpen: boolean;
  selected?: any;
  selectedIndex: any;
  selectedOption: ListItemComponent;
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
        (click)='this.state.isOpen = !this.state.isOpen'
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
      [cdkConnectedOverlayOpen]="this.state.isOpen"
      [cdkConnectedOverlayWidth]="this.state.anchorWidth"
      [cdkConnectedOverlayPanelClass]="'cui-event-overlay__children'">
      <cui-list>
        <ng-content></ng-content>
      </cui-list>
    </ng-template>
  `,
  styles: []
})
export class SelectComponent implements AfterContentChecked {

  @Input() public class = '';
  @Input() public defaultValue: string = null;
  @Input() public id: string = null;
  @Input() public isDynamic = false;
  @Input() public isMulti = false;
  /** @option Callback function invoked by user selecting an interactive item within list | null */
  // @Output() select = new EventEmitter();
  // @Input() public overlayProps: object = {};

  @HostBinding('class') classes = 'cui-input-group cui-select';

  @ViewChild(ButtonComponent) originButton;
  @ContentChildren(ListItemComponent) selectOptions: QueryList<ListItemComponent>;

  public state: IState;
  private Subscription;

  constructor(private cd: ChangeDetectorRef, private emitter: ListService) {
    this.Subscription = this.emitter.subscribe(optionData => {
      this.handleSelected(optionData);
    });

    this.state = {
      isOpen: false,
      selected: [],
      selectedIndex: [],
      selectedOption: null,
      anchorNode: null,
      anchorWidth: null,
      id: this.id || uniqueId('cui-select-')
    };
  }

  ngAfterContentChecked () {
    this._setAnchorWidth(this.originButton.el.nativeElement);
  }

  public get buttonClasses(): string {
    return 'cui-button--input' +
    ' cui-button cui-button--36' +
    `${(this.class && ` ${this.class}`) || ''}`;
  }

  handleSelected (optionData) {
    this._updateSelected(optionData);

    this.selectOptions.forEach((option) => {
      this.state.selected.some((selectedOption) => {
        if (!option.isReadOnly && (option.id === selectedOption.id)) {
          option.active = true;
          console.log(`id: ${option.label}: active = true`);
          return;
        }
        console.log(`id: ${option.label}: active = false`);
        option.active = false;
      });
    });
    this.cd.detectChanges();
  }

  private _updateSelected(optionData) {
    const isActive = find(this.state.selected, optionData);

    if (!this.isMulti) { this.state.isOpen = false; }
    if (isActive && this.isMulti) { return; }
    if (isActive && this.isMulti) {
      return this.state.selected = filter(this.state.selected, option => !isEqual(option, optionData));
    } else if (!isActive && !this.isMulti) {
      this.state.selected = [optionData];
      return this.state.selected;
    } else {
      return this.state.selected = [...this.state.selected, optionData];
    }
  }

public currentValue = () => {
  const { selected } = this.state;
  if (!this.isMulti && selected.length) {
    return selected[0].label; }
  if (selected.length === 1) {
    return `${selected.length} Item Selected`;
  } else if (selected.length) {
    return `${selected.length} Items Selected`;
  }
}

  private _setAnchorWidth = elementAnchor => {
    const anchor = elementAnchor && elementAnchor.getBoundingClientRect();
    this.state.anchorWidth = anchor.width;
  }
}
