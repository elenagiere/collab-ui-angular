import { Component, OnInit, Input } from '@angular/core';
import {
  uniqueId,
} from 'lodash';
import { SelectOptionOverlayService } from './select-option-overlay/select-option-overlay.service';

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
  templateUrl: './select.component.html',
  styles: []
})
export class SelectComponent implements OnInit {

  // children
  @Input() public class = '';
  @Input() public defaultValue: string = null;
  @Input() public id: string = null;
  @Input() public isDynamic = false;
  @Input() public isMulti = false;
  // onSelect
  @Input() public overlayProps: object = {};

  public state: IState;
  public buttonClass: string;

  constructor(private previewOptions: SelectOptionOverlayService) {
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

  public handleToggle = () => {
    this.previewOptions.open();
    // this.state.isOpen = !this.state.isOpen;
    // this.state.anchorNode.findDOMNode(this.clickTextField).parentNode
  }

  ngOnInit() {
    this.buttonClass = 'cui-button--input' +
      ' cui-button cui-button--36' +
      `${(this.class && ` ${this.class}`) || ''}`;
  }
}
