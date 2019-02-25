import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class EmitterService {
  private eventBus$ = new Subject();
  subscribe(next) {
    return this.eventBus$.subscribe(next);
  }
  next(event) {
    this.eventBus$.next(event);
  }
}
