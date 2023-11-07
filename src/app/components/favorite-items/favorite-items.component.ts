import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/apiData/cart.service';
import { SharedService } from 'src/app/services/apiData/shared.service';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss'],
})
export class FavoriteItemsComponent implements OnInit, OnDestroy {
  favoriteItems: Product[] = [];
  itemsInCart: any[] = [];
  private favoritesSubscription: Subscription = new Subscription();
  selectedSizeValue: string = '';

  constructor(
    private sharedService: SharedService,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.sharedService.getFavorites$.subscribe((data: any) => {
      this.favoriteItems = data;
    });
  }

  addToCart(favoriteItem: Product, selectedSize: string): void {
    const userId = this.authService.getUserId();
    const date = new Date().toISOString().split('T')[0];

    const existingProductIndex = this.itemsInCart.findIndex(
      (item) => item.product === favoriteItem.id && item.size === selectedSize
    );

    if (existingProductIndex !== -1) {
      this.itemsInCart[existingProductIndex].quantity += 1;
    } else {
      this.itemsInCart.push({
        product: favoriteItem.id,
        quantity: 1,
        size: selectedSize,
      });
    }

    this.cartService
      .addToCart(userId!, date, this.itemsInCart)
      .subscribe((response) => {
        console.log(response);
        this.sharedService.updateItemsInCart(this.itemsInCart);
      });
  }
  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }
}
