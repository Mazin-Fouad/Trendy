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
    // Create a new reference using spread syntax
    this.itemsInCartSubject.next([...newItems]);
  }

  increaseQuantity(product: any): void {
    const item = this.itemsInCartSubject.value.find(
      (i) => i.product === product.id
    );
    if (item) {
      item.quantity += 1;
      this.itemsInCartSubject.next([...this.itemsInCartSubject.value]);
    }
  }

  decreaseQuantity(product: any): void {
    const item = this.itemsInCartSubject.value.find(
      (i) => i.product === product.id
    );
    if (item && item.quantity > 0) {
      item.quantity -= 1;
      this.itemsInCartSubject.next([...this.itemsInCartSubject.value]);
    }
  }

  deleteItem(product: any): void {
    const updatedItems = this.itemsInCartSubject.value.filter(
      (i) => i.product !== product.id
    );
    this.itemsInCartSubject.next(updatedItems);
  }
}
