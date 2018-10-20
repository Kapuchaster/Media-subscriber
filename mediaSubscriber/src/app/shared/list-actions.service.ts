import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../user';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListActionsService {
  users: User[] = [];
  usersChange: Subject<User[]> = new Subject<User[]>();

  constructor(private storageService: StorageService) {
    this.usersChange.subscribe((value) => {
      this.users = value;
    });
    this.users = this.storageService.getFormStorage('users') || [];
  }

  addClient(name) {
    this.users.push(new User(name));
    this.storageService.saveInStorage('users', this.users);
    this.usersChange.next(this.users);
  }

  deleteClient(name) {
    const indexToRemove = this.users.findIndex(
      function (obj) { return obj.name === name; });

    if (indexToRemove !== -1) {
      this.users.splice(indexToRemove, 1);
      this.storageService.saveInStorage('users', this.users);
      this.usersChange.next(this.users);
    }
  }

  callClients() {
    return this.usersChange.next(this.users);
  }

}
