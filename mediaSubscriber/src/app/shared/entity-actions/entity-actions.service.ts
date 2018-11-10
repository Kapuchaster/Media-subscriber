import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Entity from 'src/app/entity';
import { StorageService } from 'src/app/shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export default class EntityActionsService {
  entities: Entity[] = [];
  activeEntities: Entity[] = [];
  entitiesChange: Subject<Entity[]> = new Subject<Entity[]>();
  activeEntitiesChange: Subject<Entity[]> = new Subject<Entity[]>();

  constructor(private storageService: StorageService) {
    this.entitiesChange.subscribe((value) => {
      this.entities = value;
    });
    this.entities = this.storageService.getFormStorage('entityTemps') || [];

    this.activeEntitiesChange.subscribe((value) => {
      this.activeEntities = value;
    });
    this.activeEntities = this.storageService.getFormStorage('activeEntity') || [];
  }

  callEntities() {
    return this.entitiesChange.next(this.entities);
  }

  callActiveEntities() {
    return this.activeEntitiesChange.next(this.activeEntities);
  }

  addEntity(entity: Entity) {
    this.entities.push(entity);
    this.storageService.saveInStorage('entityTemps',  this.entities);
    this.entitiesChange.next(this.entities);
  }

  addActiveEntity(entity: Entity) {
    this.activeEntities.push(entity);
    this.storageService.saveInStorage('activeEntity',  this.activeEntities);
    this.activeEntitiesChange.next(this.activeEntities);
  }
}
