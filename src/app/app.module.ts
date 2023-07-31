import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandsBoxComponent } from './components/brands-box/brands-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingSectionComponent,
    NavbarComponent,
    BrandsBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
