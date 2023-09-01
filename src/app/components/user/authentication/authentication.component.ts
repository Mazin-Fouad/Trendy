import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  registrationForm: FormGroup;

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
  }

  ngOnInit(): void {}

  register() {
    if (this.registrationForm.valid) {
      this.authService
        .registerUser(this.registrationForm.value)
        .subscribe((response) => {
          console.log(response);
        });
    }
  }
}
