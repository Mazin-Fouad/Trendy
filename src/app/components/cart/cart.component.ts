import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/apiData/product.service';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  receivedCartItems: any[] = [];
  itemsInCart: any[] = [];

  constructor(
    private sharedService: SharedService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sharedService.itemsInCart$.subscribe((items: any) => {
      this.receivedCartItems = items;
      this.updateItemsInCartBasedOnReceivedItems();
    });

    this.productService.getAllProducts().subscribe((products: any[]) => {
      this.itemsInCart = products;
      this.updateItemsInCartBasedOnReceivedItems();
    });
  }

  private updateItemsInCartBasedOnReceivedItems(): void {
    if (!this.receivedCartItems.length || !this.itemsInCart.length) {
      this.itemsInCart = [];
      return;
    }

    this.filterItemsBasedOnCart();
  }

  private filterItemsBasedOnCart(): void {
    const cartProductQuantityMap = new Map(
      this.receivedCartItems.map((item) => [item.product, item.quantity])
    );

    this.itemsInCart = this.itemsInCart
      .filter((product) => cartProductQuantityMap.has(product.id))
      .map((product) => ({
        ...product,
        quantity: cartProductQuantityMap.get(product.id),
      }));
  }

  increaseQuantity(item: any): void {
    const index = this.itemsInCart.indexOf(item);
    if (index !== -1) {
      this.itemsInCart[index].quantity += 1;
    }
  }

  decreaseQuantity(item: any): void {
    const index = this.itemsInCart.indexOf(item);
    if (index !== -1 && this.itemsInCart[index].quantity > 0) {
      this.itemsInCart[index].quantity -= 1;
    }
  }

  deleteItem(item: any): void {
    const index = this.itemsInCart.indexOf(item);
    if (index !== -1) {
      this.itemsInCart.splice(index, 1);
    }
  }

  clearCart(): void {
    this.itemsInCart.length = 0;
    this.receivedCartItems.length = 0;
  }
}
