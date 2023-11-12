import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductsLoadingViewComponent } from './products-loading-view.component';

describe('ProductsLoadingViewComponent', () => {
  let component: ProductsLoadingViewComponent;
  let fixture: ComponentFixture<ProductsLoadingViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxSkeletonLoaderModule],
      declarations: [ProductsLoadingViewComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(ProductsLoadingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
