import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Activity from 'src/app/activity';
import { StorageService } from 'src/app/shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export default class ActivityActionsService {
  activities: Activity[] = [];
  activitiesChange: Subject<Activity[]> = new Subject<Activity[]>();

  constructor(private storageService: StorageService) {
    this.activitiesChange.subscribe((value) => {
      this.activities = value;
    });
    this.activities = this.storageService.getFormStorage('activitiyTemps') || [];
  }

  callActivities() {
    return this.activitiesChange.next(this.activities);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
    this.storageService.saveInStorage('activitiyTemps',  this.activities);
    this.activitiesChange.next(this.activities);
  }
}
