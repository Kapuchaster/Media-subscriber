import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity } from '../activity';
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ListActionsService {
  activities: Activity[] = [];
  activitiesChange: Subject<Activity[]> = new Subject<Activity[]>();

  constructor(private storageService: StorageService) {
    this.activitiesChange.subscribe((value) => {
      this.activities = value;
    });
    this.activities = this.storageService.getFormStorage('activities');
  }

  addClient(name) {
    this.activities.push(new Activity(name));
    this.storageService.saveInStorage('activities', this.activities);
    this.activitiesChange.next(this.activities);
  }

  deleteClient(name) {
    const indexToRemove = this.activities.findIndex(
      function (obj) { return obj.name === name; });

    if (indexToRemove !== -1) {
      this.activities.splice(indexToRemove, 1);
      this.storageService.saveInStorage('activities', this.activities);
      this.activitiesChange.next(this.activities);
    }
  }

  callClients() {
    return this.activitiesChange.next(this.activities);
  }

}
