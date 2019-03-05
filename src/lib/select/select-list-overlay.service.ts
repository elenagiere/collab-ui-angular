// import { Injectable, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
// import { ComponentPortal } from '@angular/cdk/portal';

// import { SelectListOverlayComponent } from './select-list-overlay.component';
// import { SelectListOverlayRef } from './select-list-overlay-ref';

// interface SelectListOverlayConfig {
//   panelClass?: string;
//   hasBackdrop?: boolean;
//   backdropClass?: string;
// }

// const DEFAULT_CONFIG: SelectListOverlayConfig = {
//   hasBackdrop: true,
//   backdropClass: 'dark-backdrop',
//   panelClass: 'tm-select-list-overlay-panel'
// };

// @Injectable()
// export class SelectListOverlayService {

//   constructor(private overlay: Overlay) { }

//   open(config: SelectListOverlayConfig = {}) {
//     // Override default configuration
//     const dialogConfig = { ...DEFAULT_CONFIG, ...config };

//     // Returns an OverlayRef which is a PortalHost
//     const overlayRef = this.createOverlay(dialogConfig);

//     // Instantiate remote control
//     const dialogRef = new SelectListOverlayRef(overlayRef);

//     // Create ComponentPortal that can be attached to a PortalHost
//     const selectListOverlayPortal = new ComponentPortal(SelectListOverlayComponent);

//     // Attach ComponentPortal to PortalHost
//     overlayRef.attach(selectListOverlayPortal);

//     overlayRef.backdropClick().subscribe(_ => dialogRef.close());

//     return dialogRef;
//   }

//   private createOverlay(config: SelectListOverlayConfig) {
//     const overlayConfig = this.getOverlayConfig(config);
//     return this.overlay.create(overlayConfig);
//   }

//   private getOverlayConfig(config: SelectListOverlayConfig): OverlayConfig {
//     // const positionStrategy = this.overlay.position()
//     //   // .flexibleConnectedTo(this.selectButton);
//     //   .global()
//     //   .centerHorizontally()
//     //   .centerVertically();

//     const overlayConfig = new OverlayConfig({
//       // hasBackdrop: config.hasBackdrop,
//       // backdropClass: config.backdropClass,
//       // panelClass: config.panelClass,
//       // scrollStrategy: this.overlay.scrollStrategies.block(),
//       // positionStrategy
//     });

//     return overlayConfig;
//   }
// }
