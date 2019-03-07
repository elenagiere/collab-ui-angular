import { Component, OnInit } from '@angular/core';
import { AlertService } from '@collab-ui/angular';

@Component({
  selector: 'docs-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  key: string;
  constructor(private alertService: AlertService) {}

  showAlert() {
    this.key = this.alertService.info('Alert', 'Who\'s awesome?  You are!');
  }

  hideAlert() {
    this.alertService.hide(this.key);
  }

  onSelect () {
    console.log('Plaground: onSelect has been clicked');
  }

  ngOnInit() {}
}

// import { Component } from '@angular/core';
// import { AlertService } from '@collab-ui/angular';

// @Component({
//   selector: 'docs-playround',
//   template: `
//     <button cui-button (click)="onClick()" aria-label='Click to Open'>
//       Success
//     </button>
//     `,
// })

// export class PlaygroundComponent {
//   constructor(private alertService: AlertService) {}

//   onClick() {
    // this.alertService.success('Alert', 'Who\'s awesome?  You are!', {
    //   ariaLabel: 'Close Alert',
    //   orderNewest: false,
    //   onHide: () => console.log('onHide info'),
    // });
//   }
// }