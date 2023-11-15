import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserRegistrationForm } from 'src/app/models/user-registration-form';
import { environment } from 'src/environments/environment.development';
import { UserLogin } from 'src/app/models/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: UserRegistrationForm): Observable<UserRegistrationForm> {
    return this.http
      .post<UserRegistrationForm>(environment.baseUrl + '/users', data)
      .pipe(
        tap((response: any) => {
          if (response.id) {
            this.setUserId(response.id);
          }
        })
      );
  }

  login(data: UserLogin): Observable<any> {
    return this.http
      .post(environment.baseUrl + '/auth/login', JSON.stringify(data))
      .pipe(
        tap((response: any) => {
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
      );
  }

  setUserId(userId: number): void {
    localStorage.setItem('userId', userId.toString());
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? Number(userId) : null;
  }

  // Helper methods to handle token in local storage.
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
  }

  guestLogin(): void {
    const guestToken = 'GUEST-TOKEN';
    this.setToken(guestToken);
  }
}
