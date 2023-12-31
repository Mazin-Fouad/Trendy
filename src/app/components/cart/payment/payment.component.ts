import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { SharedService } from 'src/app/services/apiData/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  paymentForm: FormGroup;
  paymentDataSent: boolean = false;
  itemsInCart: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService
  ) {
    this.paymentForm = this.formBuilder.group({
      masterCard: ['', [Validators.pattern(/^(\d{4}\s){3}\d{4}$/)]],
      visaCard: ['', [Validators.pattern(/^(\d{4}\s){3}\d{4}$/)]],
      cardholderName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
      ],
      expireDate: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{4}$/)],
      ], // Validates MM/YYYY format and makes it required
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]], // Makes CVV required
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
      this.paymentDataSent = true;
      console.log('Payment form Submission', this.paymentForm.value);
      this.sharedService.itemsInCart$ = of([]);
      //To send to the server..
    }
  }

  emptyMasterCard() {
    this.paymentForm.get('masterCard')?.setValue('');
  }

  emptyVisaCard() {
    this.paymentForm.get('visaCard')?.setValue('');
  }
}
