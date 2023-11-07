import { Injectable } from '@angular/core';
import { LandingInfo } from 'src/app/viewModels/landing-info';

@Injectable({
  providedIn: 'root',
})
export class TrendyInfoService {
  storeInfo: LandingInfo;

  constructor() {
    this.storeInfo = {
      mainText: 'Getting the best and latest style has never been easier!',
      discribction:
        'Trendy is a platform that helps to make fashion accessible to all. It brings fashion to your doorstep!',
      btnText: 'See us on Youtube',
      firstImg: 'assets/imgs/landing-first-img.png',
      secondImg: 'assets/imgs/landing-second-img.png',
      subImgs: [
        '/assets/imgs/sub-img-1.png',
        '/assets/imgs/sub-img-2.png',
        '/assets/imgs/sub-img-3.png',
      ],
      youtubeChannel: 'https://www.youtube.com/',
    };
  }
}
