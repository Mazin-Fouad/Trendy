import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsBoxComponent } from './components/brands-box/brands-box.component';
import { ProductsComponent } from './components/products/products.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FavoriteItemsComponent } from './components/favorite-items/favorite-items.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { AuthenticationComponent } from './components/user/authentication/authentication.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { ScrollDownNavComponent } from './components/scroll-down-nav/scroll-down-nav.component';
import { OurStoresComponent } from './components/our-stores/our-stores.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthenticationMobileViewComponent } from './components/user/authentication-mobile-view/authentication-mobile-view.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
    AuthenticationComponent,
    AboutUsComponent,
    OurServiceComponent,
    ScrollDownNavComponent,
    OurStoresComponent,
    FooterComponent,
    AuthenticationMobileViewComponent,
    NotFoundComponent,
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
    ReactiveFormsModule,
  ],

  providers: [
    SharedService,
    NgDialogAnimationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
