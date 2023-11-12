import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../user/auth.service';
import { UserCart } from 'src/app/models/user-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  addToCart(userId: number, date: string, products: any[]): Observable<any> {
    const body = {
      userId,
      date,
      products,
    };
    return this.http.post(`${environment.baseUrl}/carts`, body);
  }
}
