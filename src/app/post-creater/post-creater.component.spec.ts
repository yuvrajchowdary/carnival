import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreaterComponent } from './post-creater.component';

describe('PostCreaterComponent', () => {
  let component: PostCreaterComponent;
  let fixture: ComponentFixture<PostCreaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCreaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
