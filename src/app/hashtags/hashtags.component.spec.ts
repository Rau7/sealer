import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagsComponent } from './hashtags.component';

describe('HashtagsComponent', () => {
  let component: HashtagsComponent;
  let fixture: ComponentFixture<HashtagsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HashtagsComponent]
    });
    fixture = TestBed.createComponent(HashtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
