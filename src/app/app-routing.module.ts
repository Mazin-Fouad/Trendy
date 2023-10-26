import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/user/authentication/authentication.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PrivatPolicyComponent } from './components/privat-policy/privat-policy.component';
import { TermsComponent } from './components/terms/terms.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { CartComponent } from './components/cart/cart.component';
import { ImportantNoteComponent } from './components/user/important-note/important-note.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'entrance', pathMatch: 'full' },
  { path: 'entrance', component: AuthenticationComponent },
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivate: [() => inject(AuthGuard).canActivate()],
  },
  { path: 'data_protection', component: PrivatPolicyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'cart', component: CartComponent },
  { path: 'note', component: ImportantNoteComponent },

  { path: 'terms', component: TermsComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
