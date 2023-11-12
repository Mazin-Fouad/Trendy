import { Component } from '@angular/core';
import { AboutUsService } from 'src/app/services/staticData/about-us.service';
import { AboutUsData } from 'src/app/viewModels/about-us-data';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  aboutUsData: AboutUsData[];
  constructor(aboutUsService: AboutUsService) {
    this.aboutUsData = aboutUsService.getAboutUsContent();
    console.log(this.aboutUsData);
  }

  ngOnInit(): void {}
}
