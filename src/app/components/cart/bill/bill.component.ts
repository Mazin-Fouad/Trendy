import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  @Input() itemsInCart!: any[];
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(private sharedService: SharedService) {}

  calculateTotal(): number {
    return this.itemsInCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }

  calculateDiscountValue(): number {
    const total = this.calculateTotal();
    // Updated the discount value to 20%
    return total > 100 ? total * 0.2 : 0;
  }

  calculateDiscountedTotal(): number {
    const total = this.calculateTotal();
    // Apply 20% discount if total is greater than 100€
    return total > 100 ? total * 0.8 : total;
  }
}
