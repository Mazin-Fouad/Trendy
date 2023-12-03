import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCardNumberFormat]',
})
export class CardNumberFormatDirective {
  constructor(private el: ElementRef, private ngControl: NgControl) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    let value = this.el.nativeElement.value;
    value = value.replace(/\D/g, '').substring(0, 16); // Remove non-digits and limit length
    let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

    // Here we set the value using NgControl
    this.ngControl.control?.setValue(formattedValue, { emitEvent: true });
  }
}
