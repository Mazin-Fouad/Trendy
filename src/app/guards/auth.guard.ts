import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/user/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/entrance']);
      return false;
    }
    return true;
  }
}
