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
  totalItemsCount: number = 0;

  constructor(
    private sharedService: SharedService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sharedService.itemsInCart$.subscribe((items: any) => {
      this.receivedCartItems = items;
      this.updateItemsInCartBasedOnReceivedItems();
      console.log(this.receivedCartItems);
    });

    this.productService.getAllProducts().subscribe((products: any[]) => {
      this.itemsInCart = products;
      this.updateItemsInCartBasedOnReceivedItems();
    });
  }

  private updateItemsInCartBasedOnReceivedItems(): void {
    if (!this.receivedCartItems.length || !this.itemsInCart.length) {
      this.itemsInCart = [];
      this.totalItemsCount = 0;
      return;
    }

    this.filterItemsBasedOnCart();
    this.totalItemsCount = this.itemsInCart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
  }

  // private filterItemsBasedOnCart(): void {
  //   const cartProductQuantityMap = new Map(
  //     this.receivedCartItems.map((item) => [item.product, item.quantity])
  //   );

  //   this.itemsInCart = this.itemsInCart
  //     .filter((product) => cartProductQuantityMap.has(product.id))
  //     .map((product) => ({
  //       ...product,
  //       quantity: cartProductQuantityMap.get(product.id),
  //     }));
  // }

  private filterItemsBasedOnCart(): void {
    // Create a map with product ID as the key and the object containing quantity and size as the value.
    const cartProductDetailsMap = new Map(
      this.receivedCartItems.map((item) => [
        item.product,
        { quantity: item.quantity, size: item.size },
      ])
    );

    // Filter and map the items in cart to include the quantity and size from the cartProductDetailsMap.
    this.itemsInCart = this.itemsInCart
      .filter((product) => cartProductDetailsMap.has(product.id))
      .map((product) => ({
        ...product,
        quantity: cartProductDetailsMap.get(product.id)?.quantity,
        size: cartProductDetailsMap.get(product.id)?.size, // Ensure that the size is being passed through here
      }));
  }

  increaseQuantity(item: any): void {
    this.sharedService.increaseQuantity(item);
  }

  decreaseQuantity(item: any): void {
    this.sharedService.decreaseQuantity(item);
  }

  deleteItem(item: any): void {
    this.sharedService.deleteItem(item);
  }

  clearCart(): void {
    this.itemsInCart.length = 0;
    this.sharedService.updateItemsInCart([]);
  }
}
