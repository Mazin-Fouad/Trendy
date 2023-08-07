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

  constructor(private productService: ProductService) {}

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
}
