import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/user/authentication/authentication.component';
import { LandingSectionComponent } from './components/landing-section/landing-section.component';

const routes: Routes = [
  { path: 'entrance', component: AuthenticationComponent },
  { path: 'main', component: LandingSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
