import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss'],
})
export class FavoriteItemsComponent implements OnInit, OnDestroy {
  favoriteItems: Product[] = [];
  private favoritesSubscription: Subscription = new Subscription();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getFavorites$.subscribe((data: any) => {
      this.favoriteItems = data;
    });
  }

  ngOnDestroy(): void {
    if (this.favoritesSubscription) {
      this.favoritesSubscription.unsubscribe();
    }
  }
}
