import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowTagsComponent } from './modal-window-tags.component';

describe('ModalWindowTagsComponent', () => {
  let component: ModalWindowTagsComponent;
  let fixture: ComponentFixture<ModalWindowTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
