import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/user/authentication/authentication.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PrivatPolicyComponent } from './components/privat-policy/privat-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrance', pathMatch: 'full' },
  { path: 'entrance', component: AuthenticationComponent },
  { path: 'main', component: MainLayoutComponent },
  { path: 'data_protection', component: PrivatPolicyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'cart', component: CartComponent },

  { path: 'terms', component: TermsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
