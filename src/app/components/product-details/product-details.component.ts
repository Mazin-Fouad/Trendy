import { Component, Inject } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { PaymentInstructionsComponent } from '../payment-instructions/payment-instructions.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: Product = {} as Product;

  constructor(
    public dialogRef: MatDialogRef<ProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public paymentInstructionsDialog: MatDialog
  ) {
    this.product = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog() {
    this.paymentInstructionsDialog.open(PaymentInstructionsComponent, {
      width: '800px',
      height: '300px',
    });
  }
}
