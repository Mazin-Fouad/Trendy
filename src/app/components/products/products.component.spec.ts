import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/apiData/product.service';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductService;

  const mockProducts: Product[] = [
    {
      id: 1,
      title: 'Premium Cotton T-Shirt',
      description:
        'Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this t-shirt is not only soft and breathable but also durable. Perfect for casual wear or any outdoor activities. Available in a variety of colors.',
      category: "Men's Fashion",
      image: 'http://placehold.it/350x150',
      rating: {
        rate: 10,
        count: 55,
      },
      price: 2.99,
    },
    {
      id: 2,
      title: 'Classic Denim Jeans',
      description:
        "Our Classic Denim Jeans are a must-have in every man's wardrobe. Crafted with high-quality denim material, these jeans offer a comfortable fit and timeless style. Perfect for pairing with any top for a stylish look.",
      category: "Men's Fashion",
      image: 'http://placehold.it/350x150',
      rating: {
        rate: 9.5,
        count: 120,
      },
      price: 29.99,
    },
    {
      id: 3,
      title: 'Leather Wallet',
      description:
        'Keep your essentials organized with our Leather Wallet. Made from genuine leather, this wallet features multiple card slots and a bill compartment. Its compact design fits perfectly in your pocket. A great gift for any occasion.',
      category: "Men's Accessories",
      image: 'http://placehold.it/350x150',
      rating: {
        rate: 9.2,
        count: 85,
      },
      price: 19.99,
    },
  ];

  const mockCategories: string[] = [
    'Electronics',
    'Books',
    'Clothing',
    'Home',
    'Garden',
    'Sports',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductService,
          useValue: {
            getAllProducts: () => of(mockProducts),
            getAllCategories: () => of(mockCategories),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get products on init', () => {
    spyOn(productService, 'getAllProducts').and.callThrough();
    component.ngOnInit();
    expect(productService.getAllProducts).toHaveBeenCalled();
    expect(component.productsList).toEqual(mockProducts);
    expect(component.selectedCategory).toEqual('all');
  });

  it('should get categories on init', () => {
    spyOn(productService, 'getAllCategories').and.callThrough();
    component.ngOnInit();
    expect(productService.getAllCategories).toHaveBeenCalled();
    expect(component.categoriesList).toEqual(mockCategories.reverse());
  });

  it('should change category', () => {
    const newCategory = 'newCategory';
    component.onCategoryChange(newCategory);
    expect(component.selectedCategory).toEqual(newCategory);
  });
});
