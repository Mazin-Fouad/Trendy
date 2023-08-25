import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoresDataService } from 'src/app/services/staticData/stores-data.service';
// Provide the correct path here
import { Stores } from 'src/app/viewModels/stores';

@Component({
  selector: 'app-our-stores',
  templateUrl: './our-stores.component.html',
  styleUrls: ['./our-stores.component.scss'],
})
export class OurStoresComponent implements OnInit, OnDestroy {
  stores: Stores[];
  currentImageIndex: number = 0;
  currentBranchIndex: number = 0;
  intervalId: any;

  constructor(private storesDataService: StoresDataService) {
    this.stores = this.storesDataService.getStoresData();
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.stores[0].imgs.length) {
        this.currentImageIndex = 0;
      }
    }, 5000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
