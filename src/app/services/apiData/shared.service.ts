import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  favorites: any[] = [];
  private favoritesSubject = new BehaviorSubject<any[]>(this.favorites);
  getFavorites$ = this.favoritesSubject.asObservable();

  private itemsInCartSubject = new BehaviorSubject<any[]>([]);
  itemsInCart$ = this.itemsInCartSubject.asObservable();

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

  updateItemsInCart(newItems: any[]): void {
    const currentItems = this.itemsInCartSubject.value;
    // merge currentItems and newItems appropriately here
    // For simplicity, I'm just using concat. Adjust as needed.
    const updatedItems = currentItems.concat(newItems);
    this.itemsInCartSubject.next(updatedItems);
  }
}
