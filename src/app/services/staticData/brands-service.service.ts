import { Injectable } from '@angular/core';
import { BrandsData } from 'src/app/viewModels/brands-data';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  brandsData: BrandsData;

  constructor() {
    this.brandsData = {
      nextFashonImg: 'assets/imgs/brands/NextFashion.png',
      nextFashionTitle: 'NextFashion',
      fashionForAllImg: 'assets/imgs/brands/FashionForAll.png',
      fashionForAllTitle: 'FashionForAll',
      queenClozetImg: 'assets/imgs/brands/QueenClozet.png',
      queenClozetTitle: 'QueenClozet',
      fashionForMenImg: 'assets/imgs/brands/FashionForMen.png',
      fashionForMenTitle: 'FashionForMen',
      fashionForChilderenImg: 'assets/imgs/brands/FashionForChildren.png',
      fashionForChilderenTitle: 'FashionForChildren',
    };
  }

  getBrandsData() {
    return this.brandsData;
  }
}
