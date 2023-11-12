import { Injectable } from '@angular/core';
import { Stores } from 'src/app/viewModels/stores';

@Injectable({
  providedIn: 'root',
})
export class StoresDataService {
  storesData: Stores[];

  constructor() {
    this.storesData = [
      {
        branches: ['Munich', 'Berlin', 'Hamburg'],
        imgs: [
          'assets/imgs/branches/berlin.jpg',
          'assets/imgs/branches/hamburg.jpg',
          'assets/imgs/branches/munich.jpg',
        ],
        street: 'Johannesstraße 22',
        city: 'Munich',
        zipCode: '12345',
        phone: '0123456789',
        email: 'info@trendy-munich.com',
      },

      {
        branches: ['Munich', 'Berlin', 'Hamburg'],
        imgs: [
          'assets/imgs/branches/berlin.jpg',
          'assets/imgs/branches/hamburg.jpg',
          'assets/imgs/branches/munich.jpg',
        ],
        street: 'Maximistraße 37',
        city: 'Munich',
        zipCode: '14345',
        phone: '01237776789',
        email: 'info@trendy-Berlin.com',
      },

      {
        branches: ['Munich', 'Berlin', 'Hamburg'],
        imgs: [
          'assets/imgs/branches/berlin.jpg',
          'assets/imgs/branches/hamburg.jpg',
          'assets/imgs/branches/munich.jpg',
        ],
        street: 'Unter den Linden 105',
        city: 'Hamburg',
        zipCode: '14345',
        phone: '01237799989',
        email: 'info@trendy-hamburg.com',
      },
    ];
  }

  getStoresData(): Stores[] {
    return this.storesData;
  }
}
