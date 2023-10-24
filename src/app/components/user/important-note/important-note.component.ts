import { Component } from '@angular/core';
import { UsersListService } from 'src/app/services/user/users-list.service';

@Component({
  selector: 'app-important-note',
  templateUrl: './important-note.component.html',
  styleUrls: ['./important-note.component.scss'],
})
export class ImportantNoteComponent {
  userFixDatabase: any[] = [];
  constructor(userList: UsersListService) {
    this.userFixDatabase = userList.getAllUsers();
  }
}
