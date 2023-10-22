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

  // Calculation methods
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

  // Utility & Interaction methods
  openDialog() {
    const dialogRef: MatDialogRef<CompleteOrderComponent> = this.dialog.open(
      CompleteOrderComponent
    );

    // Close the dialog and empty the cart when the countdown completes
    dialogRef.componentInstance.countdownCompleted.subscribe(() => {
      dialogRef.close();
      this.dialogClosed.emit();
    });
  }
}
