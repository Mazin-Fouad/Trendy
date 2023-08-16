import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SharedService } from 'src/app/services/apiData/shared.service';
import { SizeService } from 'src/app/services/staticData/size.service';

@Component({
  selector: 'app-favorite-items',
  templateUrl: './favorite-items.component.html',
  styleUrls: ['./favorite-items.component.scss'],
})
export class FavoriteItemsComponent {
  favoriteItems: Product[] = [];
  selectedSize: string[] = [];

  constructor(
    private sharedService: SharedService,
    private sizeSevice: SizeService
  ) {
    sharedService.getFavorites$.subscribe((data: any) => {
      this.favoriteItems = data;
    });
  }
}
