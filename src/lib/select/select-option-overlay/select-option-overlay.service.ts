import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SelectOptionOverlayComponent } from './select-option-overlay.component';

@Injectable()
export class SelectOptionOverlayService {

  constructor(private overlay: Overlay) { }

  open() {
    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.overlay.create();

    // Create ComponentPortal that can be attached to a PortalHost
    const SelectOptionPortal = new ComponentPortal(SelectOptionOverlayComponent);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(SelectOptionPortal);
  }
}
