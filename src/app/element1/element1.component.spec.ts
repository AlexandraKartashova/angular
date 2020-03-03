import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Element1Component } from './element1.component';

describe('Element1Component', () => {
  let component: Element1Component;
  let fixture: ComponentFixture<Element1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Element1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Element1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
