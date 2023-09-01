import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistrationForm } from 'src/app/models/user-registration-form';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(user: UserRegistrationForm): Observable<UserRegistrationForm> {
    return this.http.post<UserRegistrationForm>(
      environment.baseUrl + '/users',
      user
    );
  }
}
