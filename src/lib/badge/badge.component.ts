import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cui-badge',
  template: `
    <span [className]="classes">
      <ng-content></ng-content>
    </span>
  `,
  styles: []
})
export class BadgeComponent implements OnInit {
  @Input() public rounded: boolean;
  @Input() public color: string;
  @Input() public className: string;

  public classes: string;

  constructor() { }

  ngOnInit() {
    this.classes =
      'cui-badge' +
      `${(this.rounded && ` cui-badge--round`) || ''}` +
      `${(this.color && ` cui-badge--${this.color}`) || ''}` +
      `${(this.className && ` ${this.className}`) || ''}` +
      ``;
  }
}

/**
 * @component badge
 * @section default
 * @angular
 *
<div class="row">
    <cui-badge>0</cui-badge>
    <cui-badge color='blue'>1</cui-badge>
    <cui-badge color='red'>2</cui-badge>
    <cui-badge color='yellow'>3</cui-badge>
    <cui-badge color='green'>4</cui-badge>
    <cui-badge color='mint'>5</cui-badge>
    <cui-badge color='pastel'>6</cui-badge>
    <cui-badge color='blue-pastel'>7</cui-badge>
    <cui-badge color='red-pastel'>8</cui-badge>
    <cui-badge color='yellow-pastel'>9</cui-badge>
</div>
 */

 /**
 * @component badge
 * @section round
 * @angular
 *
<div class="row">
    <cui-badge rounded=true>0</cui-badge>
    <cui-badge rounded=true color='blue'>1</cui-badge>
    <cui-badge rounded=true color='red'>2</cui-badge>
    <cui-badge rounded=true color='yellow'>3</cui-badge>
    <cui-badge rounded=true color='green'>4</cui-badge>
    <cui-badge rounded=true color='mint'>5</cui-badge>
    <cui-badge rounded=true color='pastel'>6</cui-badge>
    <cui-badge rounded=true color='blue-pastel'>7</cui-badge>
    <cui-badge rounded=true color='red-pastel'>8</cui-badge>
    <cui-badge rounded=true color='yellow-pastel'>9</cui-badge>
</div>
 */
