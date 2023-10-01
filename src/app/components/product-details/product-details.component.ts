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

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: Product = {} as Product;
  selectedSize: string = '';

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
    if (!userId) {
      console.error('User ID not found');
      return;
    }
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
    const products = [{ productId: this.product.id, quantity: 1 }]; // Assuming adding 1 product for simplicity

    this.cartService.addToCart(userId, date, products).subscribe((response) => {
      console.log(response);
    });
  }
}
