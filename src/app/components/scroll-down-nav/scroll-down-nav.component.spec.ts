import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollDownNavComponent } from './scroll-down-nav.component';

describe('ScrollDownNavComponent', () => {
  let component: ScrollDownNavComponent;
  let fixture: ComponentFixture<ScrollDownNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollDownNavComponent]
    });
    fixture = TestBed.createComponent(ScrollDownNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
