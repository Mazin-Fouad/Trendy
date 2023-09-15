import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; // Import tap operator
import { UserRegistrationForm } from 'src/app/models/user-registration-form';

import { environment } from 'src/environments/environment.development';
import { UserLogin } from 'src/app/models/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(data: UserRegistrationForm): Observable<UserRegistrationForm> {
    return this.http.post<UserRegistrationForm>(
      environment.baseUrl + '/users',
      data
    );
  }

  login(data: UserLogin): Observable<any> {
    return this.http
      .post(environment.baseUrl + '/auth/login', JSON.stringify(data))
      .pipe(
        // After a successful login, save the token to local storage.
        tap((response: any) => {
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
      );
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
}
