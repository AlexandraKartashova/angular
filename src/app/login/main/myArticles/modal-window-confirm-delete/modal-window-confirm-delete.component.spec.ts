import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowConfirmDeleteComponent } from './modal-window-confirm-delete.component';

describe('ModalWindowConfirmDeleteComponent', () => {
  let component: ModalWindowConfirmDeleteComponent;
  let fixture: ComponentFixture<ModalWindowConfirmDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowConfirmDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
