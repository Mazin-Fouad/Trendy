import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/apiData/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productsList: Product[] = [];
  categoriesList: string[] = [];
  selectedCategory: string = 'all';
  contentIsLoading: boolean = true;
  productDeatails: Product = {} as Product;
  private subscriptions: Subscription[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {
    setTimeout(() => {
      this.contentIsLoading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    let prdSubscribe: Subscription = this.productService
      .getAllProducts()
      .subscribe((products) => {
        this.productsList = products;
        this.selectedCategory = 'all';
        console.log(this.productsList);
      });
    this.subscriptions.push(prdSubscribe);
  }

  getCategories(): void {
    let catSubscription: Subscription = this.productService
      .getAllCategories()
      .subscribe((category) => {
        this.categoriesList = category.reverse();
      });

    this.subscriptions.push(catSubscription);
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  openDialog(product: Product): void {
    this.productDeatails = product;
    const dialogRef = this.dialog.open(ProductDetailsComponent, {
      data: this.productDeatails,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
