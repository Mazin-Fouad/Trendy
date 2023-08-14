import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Array to store favorite products
  favorites: any[] = [];

  // Subject to notify subscribers about changes in the favorites array
  private favoritesSubject = new BehaviorSubject<any[]>(this.favorites);

  // Observable to allow components to subscribe to changes in the favorites array
  getFavorites$ = this.favoritesSubject.asObservable();

  /**
   * Toggles a product's presence in the favorites array.
   * If the product is already a favorite, it's removed.
   * If it's not, it's added to the favorites.
   * @param product - The product to toggle
   */
  toggleFavorite(product: any): void {
    if (this.isProductInFavorites(product)) {
      this.removeProductFromFavorites(product);
    } else {
      this.addProductToFavorites(product);
    }
    this.notifyFavoritesChange();
  }

  /**
   * Checks if a product is in the favorites array.
   * @param product - The product to check
   * @returns true if the product is a favorite, false otherwise
   */
  isFavorite(product: any): boolean {
    return this.favorites.some((f) => f.id === product.id);
  }

  // Private helper methods

  private isProductInFavorites(product: any): boolean {
    return this.favorites.findIndex((f) => f.id === product.id) > -1;
  }

  private addProductToFavorites(product: any): void {
    this.favorites.push(product);
  }

  private removeProductFromFavorites(product: any): void {
    const productIndex = this.favorites.findIndex((f) => f.id === product.id);
    if (productIndex > -1) {
      this.favorites.splice(productIndex, 1);
    }
  }

  private notifyFavoritesChange(): void {
    this.favoritesSubject.next(this.favorites);
  }
}
