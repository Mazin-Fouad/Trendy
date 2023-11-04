import { Component, Inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { PaymentInstructionsComponent } from '../payment-instructions/payment-instructions.component';
import { SharedService } from 'src/app/services/apiData/shared.service';
import { SizeService } from 'src/app/services/staticData/size.service';
import { CartService } from 'src/app/services/apiData/cart.service';
import { AuthService } from 'src/app/services/user/auth.service';
import { UserCart } from 'src/app/models/user-cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: Product = {} as Product;
  selectedSize: string = '';
  itemsInCart: any[] = [];
  selectedSizeValue: string = '';

  constructor(
    public dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public paymentInstructionsDialog: MatDialog,
    private sharedService: SharedService,
    private sizeService: SizeService,
    private authService: AuthService,
    private cartService: CartService
  ) {
    this.product = data;
    this.sharedService.itemsInCart$.subscribe(
      (items) => (this.itemsInCart = items)
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog() {
    this.paymentInstructionsDialog.open(PaymentInstructionsComponent, {
      width: '600px',
      height: '300px',
    });
  }

  toggleFavorite(product: Product): void {
    this.sharedService.toggleFavorite(product);
  }

  isFavorite(product: Product): boolean {
    return this.sharedService.favorites.some(
      (favProduct) => favProduct.id === product.id
    );
  }

  addToCart(): void {
    const userId = this.authService.getUserId();
    const date = new Date().toISOString().split('T')[0];

    const existingProduct = this.itemsInCart.find(
      (item) => item.product === this.product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.itemsInCart.push({
        product: this.product.id,
        quantity: 1,
        size: this.selectedSizeValue,
      });
    }

    this.cartService
      .addToCart(userId!, date, this.itemsInCart)
      .subscribe((response) => {
        console.log(response);
        // Update the shared service with the new cart items
        this.sharedService.updateItemsInCart(this.itemsInCart);
      });
  }
}
