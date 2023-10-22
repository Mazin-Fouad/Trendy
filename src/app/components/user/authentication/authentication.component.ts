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

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
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

      this.authService.login(loginData).subscribe((response) => {
        console.log(response);
      });
    }
    this.router.navigate(['/main']);
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

  get passw() {
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
}
