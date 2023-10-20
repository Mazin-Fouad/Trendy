import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/apiData/product.service';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  receivedCartItems: any[] = []; // corrected the spelling of 'received'
  itemsInCart: any[] = [];

  constructor(
    private sharedService: SharedService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.sharedService.itemsInCart$.subscribe((items: any) => {
      this.receivedCartItems = items;

      // If receivedCartItems is empty, empty itemsInCart as well
      if (!this.receivedCartItems.length) {
        this.itemsInCart = [];
        return;
      }

      // Make sure you've received itemsInCart before filtering
      if (this.itemsInCart.length) {
        this.filterItemsBasedOnCart();
      }
    });

    this.productService.getAllProducts().subscribe((products: any[]) => {
      this.itemsInCart = products;

      // If receivedCartItems is empty, empty itemsInCart as well
      if (!this.receivedCartItems.length) {
        this.itemsInCart = [];
        return;
      }

      // Make sure you've received receivedCartItems before filtering
      if (this.receivedCartItems.length) {
        this.filterItemsBasedOnCart();
      }
    });
  }

  private filterItemsBasedOnCart(): void {
    // Create a map of product ID to its quantity
    const cartProductQuantityMap = new Map(
      this.receivedCartItems.map((item) => [item.product, item.quantity])
    );

    // Filter itemsInCart to only include items with product IDs in cartProductQuantityMap
    // and also augment the product with its corresponding quantity
    this.itemsInCart = this.itemsInCart
      .filter((product) => cartProductQuantityMap.has(product.id))
      .map((product) => ({
        ...product,
        quantity: cartProductQuantityMap.get(product.id),
      }));

    console.log(this.itemsInCart);
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
}
