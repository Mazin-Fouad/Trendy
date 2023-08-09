import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/apiData/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList: Product[] = [];
  categoriesList: string[] = [];
  selectedCategory: string = 'all';
  contentIsLoading: boolean = true;

  constructor(private productService: ProductService) {
    setTimeout(() => {
      this.contentIsLoading = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.productsList = products;
      this.selectedCategory = 'all';
    });
  }

  getCategories(): void {
    this.productService.getAllCategories().subscribe((category) => {
      this.categoriesList = category.reverse();
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
  }

  trackById(index: number, item: any): number {
    return item.id;
  }
}
