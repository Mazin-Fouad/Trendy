import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductsComponent } from './products.component';
import { Product } from 'src/app/models/product';
import { of } from 'rxjs';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule, MatDialogModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.productsList).toEqual([]);
    expect(component.categoriesList).toEqual([]);
    expect(component.selectedCategory).toBe('all');
    expect(component.contentIsLoading).toBeTrue();
    expect(component.isProductFavorite).toBeFalse();
  });

  it('should fetch products and update productsList', () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Test Product',
        description: 'Test Description',
        category: 'Test',
        image: 'test.jpg',
        rating: { rate: 4, count: 100 },
        price: 100,
      },
    ];
    spyOn(component.productService, 'getAllProducts').and.returnValue(
      of(mockProducts)
    );
    component.getProducts();
    expect(component.productsList).toEqual(mockProducts);
  });

  it('should fetch categories and update categoriesList', () => {
    const mockCategories: string[] = ['Category1', 'Category2'];
    spyOn(component.productService, 'getAllCategories').and.returnValue(
      of(mockCategories)
    );
    component.getCategories();
    expect(component.categoriesList).toEqual(mockCategories.reverse());
  });

  it('should update selectedCategory on category change', () => {
    const testCategory = 'Test';
    component.onCategoryChange(testCategory);
    expect(component.selectedCategory).toBe(testCategory);
  });

  it('should return correct id for trackById', () => {
    const mockItem = { id: 123 };
    const result = component.trackById(0, mockItem);
    expect(result).toBe(123);
  });
});
