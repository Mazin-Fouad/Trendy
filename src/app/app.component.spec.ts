import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsBoxComponent } from './components/brands-box/brands-box.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProductsLoadingViewComponent } from './components/products-loading-view/products-loading-view.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      declarations: [
        AppComponent,
        LandingSectionComponent,
        ProductsComponent,
        NavbarComponent,
        BrandsBoxComponent,
        ProductsLoadingViewComponent,
      ],
      providers: [{ provide: MatDialog, useValue: MatDialog }],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
