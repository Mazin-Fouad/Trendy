import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsBoxComponent } from './brands-box.component';

describe('BrandsBoxComponent', () => {
  let component: BrandsBoxComponent;
  let fixture: ComponentFixture<BrandsBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsBoxComponent],
    });
    fixture = TestBed.createComponent(BrandsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
