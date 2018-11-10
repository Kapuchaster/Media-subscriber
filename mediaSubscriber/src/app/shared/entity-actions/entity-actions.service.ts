import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Entity from 'src/app/entity';
import { StorageService } from 'src/app/shared/storage.service';
import Activity from 'src/app/activity';

@Injectable({
  providedIn: 'root'
})
export default class EntityActionsService {
  entities: Entity[] = [];
  activities: Activity[] = [];
  entitiesChange: Subject<Entity[]> = new Subject<Entity[]>();
  activitiesChange: Subject<Activity[]> = new Subject<Activity[]>();

  constructor(private storageService: StorageService) {
    this.entitiesChange.subscribe((value) => {
      this.entities = value;
    });
    this.entities = this.storageService.getFormStorage('entityTemps') || [];

    this.activitiesChange.subscribe((value) => {
      this.activities = value;
    });
    this.activities = this.storageService.getFormStorage('activityTemps') || [];
  }

  callEntities() {
    return this.entitiesChange.next(this.entities);
  }

  callActivities() {
    return this.activitiesChange.next(this.activities);
  }

  addEntity(entity: Entity) {
    this.entities.push(entity);
    this.storageService.saveInStorage('entityTemps',  this.entities);
    this.entitiesChange.next(this.entities);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
    this.storageService.saveInStorage('activityTemps',  this.activities);
    this.activitiesChange.next(this.activities);
  }
}
