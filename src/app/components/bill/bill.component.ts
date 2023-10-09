import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  @Input() itemsInCart!: any[];

  constructor() {}

  ngOnInit(): void {}
  calculateTotal(): number {
    return this.itemsInCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  calculateDiscountValue(): number {
    const total = this.calculateTotal();
    return total > 100 ? total * 0.1 : 0;
  }

  calculateDiscountedTotal(): number {
    const total = this.calculateTotal();
    return total > 100 ? total * 0.9 : total;
  }
}
