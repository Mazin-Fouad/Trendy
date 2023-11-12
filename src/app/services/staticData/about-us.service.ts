import { Injectable } from '@angular/core';
import { AboutUsData } from 'src/app/viewModels/about-us-data';

@Injectable({
  providedIn: 'root',
})
export class AboutUsService {
  aboutUsContent: AboutUsData[];

  constructor() {
    this.aboutUsContent = [
      {
        title: 'Discover the variety',
        description:
          'Over 5,000,000 products from more than 3,000 international designer labels at a glance and with one click on the way to your home.',
        image: 'assets/imgs/about-us-imgs/godisable-jacob-896291.jpg',
      },
      {
        title: 'New every day',
        description:
          '500 brand new items can already be ordered from midnight. Log in and let yourself be surprised.',
        image: 'assets/imgs/about-us-imgs/kevin-kabore-4966995.jpg',
      },
      {
        title: 'Sustainability',
        description:
          'We believe that our business model inherently contributes to more sustainability in the fashion industry, but we recognize that we can always do more. Find out how we are working to make what and how we sell as sustainable as possible in our 2022 Sustainability Report.',
        image: 'assets/imgs/about-us-imgs/the-lazy-artist-gallery-1342609.jpg',
      },
    ];
  }

  getAboutUsContent(): AboutUsData[] {
    return this.aboutUsContent;
  }
}
