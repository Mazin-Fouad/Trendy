import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsBoxComponent } from './components/brands-box/brands-box.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { StarRatingModule } from 'angular-star-rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsLoadingViewComponent } from './components/products-loading-view/products-loading-view.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PaymentInstructionsComponent } from './components/payment-instructions/payment-instructions.component';
import { SharedService } from './services/apiData/shared.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FavoriteItemsComponent } from './components/favorite-items/favorite-items.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgDialogAnimationService } from 'ng-dialog-animation';

@NgModule({
  declarations: [
    AppComponent,
    LandingSectionComponent,
    NavbarComponent,
    BrandsBoxComponent,
    ProductsComponent,
    ProductsLoadingViewComponent,
    ProductDetailsComponent,
    PaymentInstructionsComponent,
    FavoriteItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    MatMenuModule,
    MatDialogModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    NoopAnimationsModule,
  ],
  providers: [SharedService, NgDialogAnimationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
