import { Component, OnInit } from '@angular/core';
import { TrendyInfoService } from 'src/app/services/staticData/trendy-info.service';
import { LandingInfo } from 'src/app/viewModels/landing-info';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.component.html',
  styleUrls: ['./landing-section.component.scss'],
})
export class LandingSectionComponent implements OnInit {
  storeData: LandingInfo;
  constructor(private storeInfoService: TrendyInfoService) {
    this.storeData = storeInfoService.storeInfo;
  }

  ngOnInit(): void {
    console.log(this.storeData);
  }
}
