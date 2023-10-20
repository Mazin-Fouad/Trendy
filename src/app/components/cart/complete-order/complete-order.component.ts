import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss'],
})
export class CompleteOrderComponent implements OnInit {
  countdown: number = 3;
  @Output() countdownCompleted: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(interval); // Stop the interval when countdown reaches 0
        this.router.navigate(['/main']); // Navigate to homepage
        this.countdownCompleted.emit();
      }
    }, 1000); // Decrease every second
  }
}
