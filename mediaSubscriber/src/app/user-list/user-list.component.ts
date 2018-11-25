import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { ListActionsService } from '../shared/list-actions.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input() users: User[];

  constructor(private listActionsService: ListActionsService) { }

  ngOnInit() {
  }

  deleteUser(user) {
    this.listActionsService.deleteClient(user.name);
  }

}
