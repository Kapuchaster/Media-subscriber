import { Component, OnInit } from '@angular/core';
import ActivityActionsService from 'src/app/shared/activity-actions/activity-actions.service';
import Activity from 'src/app/activity';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  activities: Activity[] = [];
  droppedData: Activity = null;
  activeActivities: Activity[] = [];

  constructor(private activityActionsService: ActivityActionsService) {
    this.activityActionsService.activitiesChange
      .subscribe((activities) => { this.activities = activities; });

    this.activityActionsService.activeActivitiesChange
      .subscribe((activeActivities) => { this.activeActivities = activeActivities; });
  }

  ngOnInit() {
    this.activityActionsService.callActivities();
    this.activityActionsService.callActiveActivities();
  }

  onDrop({ dropData }: DropEvent<Activity>): void {
      this.droppedData = dropData;
      this.activityActionsService.addActiveActivity(dropData);
  }
}
