import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.baseUrl + '/products')
      .pipe(retry(2), catchError(this.handleError));
  }

  getAllCategories(): Observable<string[]> {
    return this.http
      .get<string[]>(environment.baseUrl + '/products/categories')
      .pipe(retry(2), catchError(this.handleError));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(environment.baseUrl + `products/category/${category}`)
      .pipe(retry(2), catchError(this.handleError));
  }
}
