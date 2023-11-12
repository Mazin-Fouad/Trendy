import { Component } from '@angular/core';
import { BrandsService } from 'src/app/services/staticData/brands-service.service';
import { BrandsData } from 'src/app/viewModels/brands-data';

@Component({
  selector: 'app-brands-box',
  templateUrl: './brands-box.component.html',
  styleUrls: ['./brands-box.component.scss'],
})
export class BrandsBoxComponent {
  brandsInfo: BrandsData;

  constructor(private brandsService: BrandsService) {
    this.brandsInfo = brandsService.getBrandsData();

    console.log(this.brandsInfo);
  }
}
