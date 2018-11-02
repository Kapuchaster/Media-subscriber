import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Activity from 'src/app/activity';
import { StorageService } from 'src/app/shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export default class ActivityActionsService {
  activities: Activity[] = [];
  activeActivities: Activity[] = [];
  activitiesChange: Subject<Activity[]> = new Subject<Activity[]>();
  activeActivitiesChange: Subject<Activity[]> = new Subject<Activity[]>();

  constructor(private storageService: StorageService) {
    this.activitiesChange.subscribe((value) => {
      this.activities = value;
    });
    this.activities = this.storageService.getFormStorage('activitiyTemps') || [];

    this.activeActivitiesChange.subscribe((value) => {
      this.activeActivities = value;
    });
    this.activeActivities = this.storageService.getFormStorage('activeActivitiy') || [];
  }

  callActivities() {
    return this.activitiesChange.next(this.activities);
  }

  callActiveActivities() {
    return this.activeActivitiesChange.next(this.activeActivities);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
    this.storageService.saveInStorage('activitiyTemps',  this.activities);
    this.activitiesChange.next(this.activities);
  }

  addActiveActivity(activity: Activity) {
    this.activeActivities.push(activity);
    this.storageService.saveInStorage('activeActivitiy',  this.activeActivities);
    this.activeActivitiesChange.next(this.activeActivities);
  }
}
