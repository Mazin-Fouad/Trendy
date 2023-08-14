import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  favorites: any[] = [];
  private favoritesSubject = new BehaviorSubject<any[]>(this.favorites);

  getFavorites$ = this.favoritesSubject.asObservable();

  toggleFavorite(product: any) {
    const productIndex = this.favorites.findIndex((f) => f.id === product.id);
    if (productIndex > -1) {
      this.favorites.splice(productIndex, 1);
    } else {
      this.favorites.push(product);
    }
    this.favoritesSubject.next(this.favorites);
  }

  isFavorite(product: any): boolean {
    return this.favorites.some((f) => f.id === product.id);
  }
}
