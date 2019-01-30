import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionOverlayComponent } from './select-option-overlay.component';

describe('SelectOptionOverlayComponent', () => {
  let component: SelectOptionOverlayComponent;
  let fixture: ComponentFixture<SelectOptionOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptionOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
