import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopListItemComponent } from './top-list-item.component';

describe('TopListItemComponent', () => {
  let component: TopListItemComponent;
  let fixture: ComponentFixture<TopListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
