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
    private sizeService: SizeService
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

  // onSizeChange(size: any): void {
  //   const newSize = size;

  //   // Check if the size is already selected
  //   if (this.sizeService.getSelectedSize() === newSize) {
  //     // If it is, remove the size
  //     this.sizeService.removeSelectedSize();
  //   } else {
  //     // Otherwise, set the new size
  //     this.sizeService.setSelectedSize(newSize);
  //   }
  // }
}
