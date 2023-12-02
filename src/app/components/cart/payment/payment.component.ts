import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.paymentForm = this.formBuilder.group({
      masterCard: ['', [Validators.pattern(/^\d{16}$/)]],
      visaCard: ['', [Validators.pattern(/^\d{16}$/)]],
      cardholderName: ['', [Validators.pattern(/^[a-zA-Z\s]*$/)]],
      expireDate: ['', [Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/)]], // Validates MM/YYYY format
      cvv: ['', [Validators.pattern(/^\d{3}$/)]],
    });

    this.onChanges();
  }

  onChanges(): void {
    // React to changes in the MasterCard input
    this.paymentForm.get('masterCard')?.valueChanges.subscribe((value) => {
      if (value) {
        this.paymentForm.get('visaCard')?.disable();
      } else {
        this.paymentForm.get('visaCard')?.enable();
      }
    });

    // React to changes in the VisaCard input
    this.paymentForm.get('visaCard')?.valueChanges.subscribe((value) => {
      if (value) {
        this.paymentForm.get('masterCard')?.disable();
      } else {
        this.paymentForm.get('masterCard')?.enable();
      }
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      console.log('Payment form Submission', this.paymentForm.value);
    }
  }

  emptyMasterCard() {
    this.paymentForm.get('masterCard')?.setValue('');
  }

  emptyVisaCard() {
    this.paymentForm.get('visaCard')?.setValue('');
  }
}
