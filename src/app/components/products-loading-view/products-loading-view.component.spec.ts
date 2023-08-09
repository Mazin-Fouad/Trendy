import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLoadingViewComponent } from './products-loading-view.component';

describe('ProductsLoadingViewComponent', () => {
  let component: ProductsLoadingViewComponent;
  let fixture: ComponentFixture<ProductsLoadingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsLoadingViewComponent]
    });
    fixture = TestBed.createComponent(ProductsLoadingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
