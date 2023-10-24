import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  usersList: any[] = [];

  constructor() {
    this.usersList = [
      {
        userName: 'johnd',
        password: 'm38rmF$',
      },

      {
        userName: 'mor_2314',
        password: '83r5^_',
      },
      {
        userName: 'kevinryan',
        password: 'kev02937@',
      },
      {
        userName: 'donero',
        password: 'ewedon',
      },
      {
        userName: 'derek',
        password: 'jklg*_56',
      },
      {
        userName: 'david_r',
        password: '3478*#54',
      },
      {
        userName: 'snyder',
        password: 'f238&@*$',
      },
      {
        userName: 'hopkins',
        password: 'William56$hj',
      },
      {
        userName: 'kate_h',
        password: 'kfejk@*_',
      },
      {
        userName: 'jimmie_k',
        password: 'klein*#%*',
      },
    ];
  }

  getAllUsers(): any[] {
    return this.usersList;
  }
}
