import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Activity from 'src/app/activity';

@Injectable({
  providedIn: 'root'
})
export default class ActivityActionsService {
  activities: Activity[] = [];
  activitiesChange: Subject<Activity[]> = new Subject<Activity[]>();

  constructor() { }

  callActivities() {
    return this.activitiesChange.next(this.activities);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
    this.activitiesChange.next(this.activities);
  }
}
