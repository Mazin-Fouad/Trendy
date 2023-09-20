import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cookies-settings',
  templateUrl: './cookies-settings.component.html',
  styleUrls: ['./cookies-settings.component.scss'],
})
export class CookiesSettingsComponent {
  constructor(public dialogRef: MatDialogRef<CookiesSettingsComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
