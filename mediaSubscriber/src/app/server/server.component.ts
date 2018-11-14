import { Component, OnInit } from '@angular/core';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import ServerService from './server.service';
import Entity from 'src/app/entity';
import Activity from 'src/app/activity';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  activities: Activity[] = [];
  entities: Entity[] = [];
  droppedData: Entity = null;
  dropData = null;

  constructor(private entityActionsService: EntityActionsService,
              private serverService: ServerService) {
    this.entityActionsService.entitiesChange
      .subscribe((entities) => { this.entities = entities; });

    this.entityActionsService.activitiesChange
      .subscribe((activities) => { this.activities = activities; });
  }

  ngOnInit() {
    this.entityActionsService.callEntities();
    this.entityActionsService.callActivities();
  }

  onDrop({ dropData }: DropEvent<Entity>): void {
    this.dropData = dropData;
    this.serverService.createTile();
  }

  deleteActivity(activity: Activity) {
    this.entityActionsService.deleteActivity(activity);
  }

  deleteEntity(entity: Entity) {
    this.entityActionsService.deleteEntity(entity);
  }
}
