import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { environment } from 'src/environments/environment.development';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable of Product array', () => {
    service.getAllProducts().subscribe();
    const req = httpMock.expectOne(environment.baseUrl + '/products');
    expect(req.request.method).toBe('GET');
  });

  it('should return an observable of string array', () => {
    service.getAllCategories().subscribe();
    const req = httpMock.expectOne(
      environment.baseUrl + '/products/categories'
    );
    expect(req.request.method).toBe('GET');
  });
});
