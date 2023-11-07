import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesSettingsComponent } from '../cookies-settings/cookies-settings.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CookiesSettingsComponent, {});
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
