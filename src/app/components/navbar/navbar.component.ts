import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/apiData/shared.service';
import { FavoriteItemsComponent } from '../favorite-items/favorite-items.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  productData: any[] = [];
  animate = false;
  private subscriptions: Subscription[] = [];
  activeLink: string = '';

  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    let favoriteSubscribe: Subscription =
      this.sharedService.getFavorites$.subscribe((data: any) => {
        this.productData = [...data];
        this.triggerAnimation();
        this.subscriptions.push(favoriteSubscribe);
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

  setActive(link: string) {
    this.activeLink = link;
  }

  openDialog() {
    this.dialog.open(FavoriteItemsComponent, {
      maxWidth: '700px',
      panelClass: 'custom-dialog-container',
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
