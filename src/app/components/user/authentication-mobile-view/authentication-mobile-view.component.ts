import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-authentication-mobile-view',
  templateUrl: './authentication-mobile-view.component.html',
  styleUrls: ['./authentication-mobile-view.component.scss'],
})
export class AuthenticationMobileViewComponent {
  isUserRegistered: boolean = true;
  showMessage: boolean = false;
  registrationForm: FormGroup;
  loginForm: FormGroup;

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

  registerSubmit() {
    this.authService
      .signUp(this.registrationForm.value)
      .subscribe((response) => {
        console.log(response);
      });

    this.showMessage = true;
    this.registrationForm.reset();
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

  @HostListener('window:scroll', [])
  private getScrollPosition(): number {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  userIsAuthenticated() {
    this.isUserRegistered = false;
  }

  userNotAuthenticated() {
    this.isUserRegistered = true;
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
}
