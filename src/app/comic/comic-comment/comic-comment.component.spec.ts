import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicCommentComponent } from './comic-comment.component';

describe('ComicCommentComponent', () => {
  let component: ComicCommentComponent;
  let fixture: ComponentFixture<ComicCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
