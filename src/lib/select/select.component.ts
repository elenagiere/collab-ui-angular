import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import {
  uniqueId,
} from 'lodash';
// import { SelectOptionOverlayService } from './select-option-overlay/select-option-overlay.service';

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
  <div class="cui-input-group cui-select">
    <div cui-button
        [attr.name]='state.id'
        [id]='state.id'
        (click)='handleToggle()'
        class={{classes}}
        active='state.isOpen'
        type="button"
        >
          <div className='cui-select__label' id="{{state.id}}__label">
              {{currentValue() || defaultValue}}
              <cui-icon name="arrow-down_16"></cui-icon>
          </div>
    </div>
  </div>
  `,
  styles: []
})
export class SelectComponent { // implements AfterViewChecked {

  // children
  @Input() public class = '';
  @Input() public defaultValue: string = null;
  @Input() public id: string = null;
  @Input() public isDynamic = false;
  @Input() public isMulti = false;
  // onSelect
  @Input() public overlayProps: object = {};

  public state: IState;

  // constructor(private previewOptions: SelectOptionOverlayService) {
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

  public get classes(): string {
    return 'cui-button--input' +
    ' cui-button cui-button--36' +
    `${(this.class && ` ${this.class}`) || ''}`;
  }

  public handleToggle = () => {
    console.log('select button clicked');
    // this.previewOptions.open();
    this.state.isOpen = !this.state.isOpen;
    // this.state.anchorNode.findDOMNode(this.clickTextField).parentNode
  }

  // ngAfterViewChecked () {
  //   // componentDidUpdate react
  //   return prevState.selected !== this.state.selected
  //   && this.onSelect
  //   && this.onSelect(this.state.selected);
  // }

}
