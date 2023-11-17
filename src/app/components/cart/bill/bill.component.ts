import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CompleteOrderComponent } from '../complete-order/complete-order.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent {
  @Input() itemsInCart!: any[];
  @Output() dialogClosed: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {}

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

  openDialog() {
    const dialogRef: MatDialogRef<CompleteOrderComponent> = this.dialog.open(
      CompleteOrderComponent
    );

    dialogRef.componentInstance.countdownCompleted.subscribe(() => {
      dialogRef.close();
      this.dialogClosed.emit();
    });
  }
}
