import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatPolicyComponent } from './privat-policy.component';

describe('PrivatPolicyComponent', () => {
  let component: PrivatPolicyComponent;
  let fixture: ComponentFixture<PrivatPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivatPolicyComponent]
    });
    fixture = TestBed.createComponent(PrivatPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
