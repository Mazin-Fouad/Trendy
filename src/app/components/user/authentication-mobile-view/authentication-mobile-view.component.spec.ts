import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMobileViewComponent } from './authentication-mobile-view.component';

describe('AuthenticationMobileViewComponent', () => {
  let component: AuthenticationMobileViewComponent;
  let fixture: ComponentFixture<AuthenticationMobileViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthenticationMobileViewComponent]
    });
    fixture = TestBed.createComponent(AuthenticationMobileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
