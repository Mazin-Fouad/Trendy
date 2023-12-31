import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesSettingsComponent } from './cookies-settings.component';

describe('CookiesSettingsComponent', () => {
  let component: CookiesSettingsComponent;
  let fixture: ComponentFixture<CookiesSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookiesSettingsComponent]
    });
    fixture = TestBed.createComponent(CookiesSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
