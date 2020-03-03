import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Element4Component } from './element4.component';

describe('Element4Component', () => {
  let component: Element4Component;
  let fixture: ComponentFixture<Element4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Element4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Element4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
