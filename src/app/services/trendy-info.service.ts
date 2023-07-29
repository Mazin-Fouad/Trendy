import { Injectable } from '@angular/core';
import { LandingInfo } from '../viewModels/landing-info';

@Injectable({
  providedIn: 'root',
})
export class TrendyInfoService {
  storeInfo: LandingInfo;

  constructor() {
    this.storeInfo = {
      mainText: 'Getting the best and latest style has never been easier!',
      discribction:
        'FashionForAll is a platform that helps to make fashion accessible to all. It brings fashion to your doorstep!',
      btnText: 'Shop collections',
      firstImg: 'assets/imgs/landing-first-img.png',
      secondImg: 'assets/imgs/landing-second-img.png',
      youtubeChannel: 'https://www.youtube.com/',
    };
  }
}
