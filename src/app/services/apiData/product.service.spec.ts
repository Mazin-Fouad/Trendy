import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { HttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of products when given valid page and limit parameters', () => {
    const page = 1;
    const limit = 10;
    const products$ = service.getProducts(page, limit);
    products$.subscribe((products) => {
      expect(products).toBeTruthy();
      expect(products.length).toBeGreaterThan(0);
    });
  });
});
