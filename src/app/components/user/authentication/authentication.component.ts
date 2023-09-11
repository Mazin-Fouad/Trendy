import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  isUserRegistered: boolean = false;
  registrationForm: FormGroup;
  loginForm: FormGroup;
  showLoginForm: boolean = true;
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        streetNumber: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
      }),
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  showRegistrationForm() {
    this.showLoginForm = false;
  }

  viewLoginForm() {
    this.showLoginForm = true;
  }

  registerSubmit() {
    this.authService
      .signUp(this.registrationForm.value)
      .subscribe((response) => {
        console.log(response);
      });

    this.isUserRegistered = true;
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authService.login(loginData).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
