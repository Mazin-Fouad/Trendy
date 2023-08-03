import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LandingSectionComponent } from './landing-section.component';
import { TrendyInfoService } from 'src/app/services/staticData/trendy-info.service';
import { LandingInfo } from 'src/app/viewModels/landing-info';
import { BrandsBoxComponent } from '../brands-box/brands-box.component';
import { ProductsComponent } from '../products/products.component';
import { NavbarComponent } from '../navbar/navbar.component';

describe('LandingSectionComponent', () => {
  let component: LandingSectionComponent;
  let fixture: ComponentFixture<LandingSectionComponent>;
  let mockTrendyInfoService: any;
  let storeInfoData: LandingInfo;

  beforeEach(() => {
    storeInfoData = {
      mainText: 'Getting the best and latest style has never been easier!',
      discribction:
        'Trendy is a platform that helps to make fashion accessible to all. It brings fashion to your doorstep!',
      btnText: 'Shop collections',
      firstImg: 'assets/imgs/landing-first-img.png',
      secondImg: 'assets/imgs/landing-second-img.png',
      subImgs: [
        '/assets/imgs/sub-img-1.png',
        '/assets/imgs/sub-img-2.png',
        '/assets/imgs/sub-img-3.png',
      ],
      youtubeChannel: 'https://www.youtube.com/',
    };

    mockTrendyInfoService = jasmine.createSpyObj(['storeInfo']);
    mockTrendyInfoService.storeInfo = storeInfoData;

    TestBed.configureTestingModule({
      declarations: [
        LandingSectionComponent,
        NavbarComponent,
        BrandsBoxComponent,
        ProductsComponent,
      ],
      providers: [
        { provide: TrendyInfoService, useValue: mockTrendyInfoService },
      ],
    });

    fixture = TestBed.createComponent(LandingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set storeData correctly from the service', () => {
    expect(component.storeData).toEqual(storeInfoData);
  });

  it('should log storeData on ngOnInit', () => {
    spyOn(console, 'log');
    component.ngOnInit();
    expect(console.log).toHaveBeenCalledWith(storeInfoData);
  });
});
