import { Component, OnInit, Input  } from '@angular/core';
import ServerService from 'src/app/server/server.service';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import Entity from 'src/app/entity';

@Component({
  selector: 'app-tile-creator',
  templateUrl: './tile-creator.component.html',
  styleUrls: ['./tile-creator.component.css']
})
export class TileCreatorComponent implements OnInit {
  @Input() entity: Entity;

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Create', actionType: 'accept' }
  ];

  modalTitle = 'Tile Creator';
  title = '';

  constructor(private serverService: ServerService,
              private entityActionsService: EntityActionsService) { }

  ngOnInit() {
  }

  closeCreator (actionType) {
    if (actionType === 'accept') {
      this.createEntity();
    }
  }

  createEntity () {
    this.title = '';
    this.entityActionsService.addActiveEntity(this.entity);
  }
}
