import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowEditArticleComponent } from './modal-window-edit-article.component';

describe('ModalWindowEditArticleComponent', () => {
  let component: ModalWindowEditArticleComponent;
  let fixture: ComponentFixture<ModalWindowEditArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowEditArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
