import { Component, OnInit } from '@angular/core';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import Activity from 'src/app/activity';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private entityActionsService: EntityActionsService) {
    this.entityActionsService.activitiesChange
    .subscribe((activities) => { this.activities = activities; });
  }

  ngOnInit() {
  }

}
