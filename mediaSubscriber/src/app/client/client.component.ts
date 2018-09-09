import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ListActionsService } from '../shared/list-actions.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  activities: Activity[] = [];
  inputClientName = '';

  constructor(
    private listActionsService: ListActionsService) {
      this.listActionsService.activitiesChange.subscribe(
        value => { this.activities = value; });
     }

  ngOnInit() {
    this.listActionsService.callClients();
  }

  addClient() {
    this.listActionsService.addClient(this.inputClientName);
    this.inputClientName = '';
  }
}
