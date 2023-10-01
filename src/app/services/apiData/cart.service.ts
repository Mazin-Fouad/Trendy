import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://fakestoreapi.com/carts';

  constructor(private http: HttpClient) {}

  addToCart(userId: number, date: string, products: any[]): Observable<any> {
    const body = {
      userId,
      date,
      products,
    };
    return this.http.post(this.apiUrl, body);
  }
}
