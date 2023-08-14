import { ChangeDetectorRef, Component } from '@angular/core';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  productData: any[] = [];
  animate = false;

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef
  ) {
    sharedService.getFavorites$.subscribe((data: any) => {
      this.productData = [...data]; // Spread the data into a new array
      this.triggerAnimation();
    });
  }

  triggerAnimation() {
    this.animate = true;

    // Reset the animation state after a short delay
    // Adjust the timeout duration to match your animation's duration
    setTimeout(() => {
      this.animate = false;
      this.cdRef.detectChanges(); // Trigger change detection to update the view
    }, 500); // Assuming the animation duration is 500ms
  }
}
