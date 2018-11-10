import { Component, OnInit } from '@angular/core';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import ServerService from './server.service';
import Entity from 'src/app/entity';
import { DropEvent } from 'angular-draggable-droppable';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  entities: Entity[] = [];
  droppedData: Entity = null;
  activeEntities: Entity[] = [];
  dropData = null;

  constructor(private entityActionsService: EntityActionsService,
              private serverService: ServerService) {
    this.entityActionsService.entitiesChange
      .subscribe((entities) => { this.entities = entities; });

    this.entityActionsService.activeEntitiesChange
      .subscribe((activeEntities) => { this.activeEntities = activeEntities; });
  }

  ngOnInit() {
    this.entityActionsService.callEntities();
    this.entityActionsService.callActiveEntities();
  }

  onDrop({ dropData }: DropEvent<Entity>): void {
    this.dropData = dropData;
    this.serverService.createTile();
  }
}
