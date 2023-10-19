import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/apiData/shared.service';
import { FavoriteItemsComponent } from '../favorite-items/favorite-items.component';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  productData: any[] = [];
  animate = false;
  animateCart = false;
  private subscriptions: Subscription[] = [];
  activeLink: string = '';
  @ViewChild('productsSection', { read: ElementRef })
  productsSection!: ElementRef;
  itemsInCart: any[] = [];
  constructor(
    private sharedService: SharedService,
    private cdRef: ChangeDetectorRef,
    public dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let favoriteSubscribe: Subscription =
      this.sharedService.getFavorites$.subscribe((data: any) => {
        this.productData = [...data];
        this.triggerAnimation();
        this.subscriptions.push(favoriteSubscribe);
      });

    let cartSubscribe: Subscription = this.sharedService.itemsInCart$.subscribe(
      (data: any) => {
        this.itemsInCart = data;
        this.triggerCartAnimation();
        this.subscriptions.push(cartSubscribe);
      }
    );
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

  triggerCartAnimation() {
    this.animateCart = true;

    // Reset the animation state after a short delay
    // Adjust the timeout duration to match your animation's duration
    setTimeout(() => {
      this.animateCart = false;
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

  scrollToProducts(): void {
    const productsElement = document.getElementById('productsSection');
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToNav(): void {
    const navElement = document.getElementById('navbar');
    if (navElement) {
      navElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  logOut(): void {
    this.authService.clearToken();
    setTimeout(() => {
      this.router.navigate(['/entrance']);
    }, 800);
  }
}
