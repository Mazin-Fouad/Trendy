import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginError: string | null = null;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
        ],
      ],
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

  ngOnInit(): void {
    this.navigateIfTokenExists();
  }

  navigateIfTokenExists() {
    const token = this.authService.getToken();
    if (token) {
      this.router.navigate(['/main']);
    }
  }

  showRegistrationForm() {
    this.showLoginForm = false;
  }

  viewLoginForm() {
    this.showLoginForm = true;
  }

  registerSubmit() {
    this.authService
      .signUp(this.registrationForm.value)
      .subscribe((response) => {});

    this.isUserRegistered = true;
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.authService.login(loginData).subscribe(
        (response) => {
          // Handle the successful login, like saving the token and redirecting.
          this.router.navigate(['/main']);
        },
        (error) => {
          // Handle the login error.
          this.loginError =
            'Failed to login. Please check your credentials and try again.';
        }
      );
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get pasword() {
    return this.registrationForm.get('password');
  }

  get userName() {
    return this.registrationForm.get('userName');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  // For the address form group
  get address() {
    return this.registrationForm.get('address');
  }

  get street() {
    return this.address?.get('street'); // Accessing it from the address form group
  }

  get streetNumber() {
    return this.address?.get('streetNumber'); // Accessing it from the address form group
  }

  get zipCode() {
    return this.address?.get('zipCode'); // Accessing it from the address form group
  }

  get city() {
    return this.address?.get('city'); // Accessing it from the address form group
  }

  get getUserName() {
    return this.loginForm.get('username');
  }

  get getPassword() {
    return this.loginForm.get('password');
  }

  onGuestLogin() {
    this.authService.guestLogin();
    this.router.navigate(['/main']);
  }
}
