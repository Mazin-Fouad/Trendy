import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products-loading-view',
  templateUrl: './products-loading-view.component.html',
  styleUrls: ['./products-loading-view.component.scss'],
})
export class ProductsLoadingViewComponent {
  @Input() isLoading: boolean = true;
  animation = 'pulse';
}
