import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRegistrationForm } from 'src/app/models/user-registration-form';
import { UserLogin } from './user-login';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private signUpUrl = 'https://fakestoreapi.com/users';
  httpOption: any;

  constructor(private http: HttpClient) {
    this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  signUp(data: UserRegistrationForm): Observable<UserRegistrationForm> {
    return this.http.post<UserRegistrationForm>(this.signUpUrl, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(
      environment.baseUrl + '/auth/login',
      JSON.stringify(data),
      this.httpOption
    );
  }
}
