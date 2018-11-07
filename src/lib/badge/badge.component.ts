import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

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
* @name Default Badges
* @description Default state of badge.

* @component badge
* @section default

@ts

<div class="row">
    <h5>Badges</h5>
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

<div class="row">
    <h5>Rounded Badges</h5>
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

<div class="row">
    <p><span class="h3">Default</span></p>
    <div>
        <cui-badge>
            <div>
                Default
            </div>
        </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Blue</span><code>color='blue'</code></p>
    <div>
        <cui-badge color='blue'>
            <div>Blue</div>
        </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Red</span><code>color='red'</code></p>
    <div>
      <cui-badge color='red'>
        <div>Red</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Yellow</span><code>color='yellow'</code></p>
    <div>
      <cui-badge color='yellow'>
        <div>Yellow</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Green</span><code>color='green'</code></p>
    <div>
      <cui-badge color='green'>
        <div>Green</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Mint</span><code>color='mint'</code></p>
    <div>
      <cui-badge color='mint'>
        <div>Mint</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Default</span><code>color='pastel'</code></p>
    <div>
      <cui-badge color='pastel'>
          <div>Default</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Blue</span><code>color='blue-pastel'</code></p>
    <div>
      <cui-badge color='blue-pastel'>
        <div>Blue</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Red</span><code>color='red-pastel'</code></p>
    <div>
      <cui-badge color='red-pastel'>
        <div>Red</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Yellow</span><code>color='yellow-pastel'</code></p>
    <div>
      <cui-badge color='yellow-pastel'>
        <div>Yellow</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Green</span><code>color='green-pastel'</code></p>
    <div>
      <cui-badge color='green-pastel'>
        <div>Green</div>
      </cui-badge>
    </div>
    <br />
    <p><span className='h3'>Mint</span><code>color='mint-pastel'</code></p>
    <div>
      <cui-badge color='mint-pastel'>
        <div>Mint</div>
      </cui-badge>
    </div>
</div>
**/
