import { Component, OnInit } from '@angular/core';
import ActivityActionsService from 'src/app/shared/activity-actions/activity-actions.service';
import Activity from 'src/app/activity';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  activities: Activity[] = [];

  constructor(private activityActionsService: ActivityActionsService) {
    this.activityActionsService.activitiesChange
      .subscribe((activities) => {this.activities = activities; });
   }

  ngOnInit() {
  }

}
