import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ListActionsService } from '../shared/list-actions.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  users: User[] = [];
  inputClientName = '';

  constructor(
    private listActionsService: ListActionsService) {
      this.listActionsService.usersChange.subscribe(
        value => { this.users = value; });
     }

  ngOnInit() {
    this.listActionsService.callClients();
  }

  addClient() {
    this.listActionsService.addClient(this.inputClientName);
    this.inputClientName = '';
  }
}
