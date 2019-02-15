import { Component, OnInit, Input  } from '@angular/core';
import ServerService from 'src/app/server/server.service';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import Entity from 'src/app/entity';
import Activity from 'src/app/activity';

@Component({
  selector: 'app-tile-creator',
  templateUrl: './tile-creator.component.html',
  styleUrls: ['./tile-creator.component.css']
})
export class TileCreatorComponent implements OnInit {
  @Input() entity: Entity;

  selectedInterval = 5;
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
    if (!this.title) { return; }
    const activity = new Activity(this.title, this.entity, this.selectedInterval);
    this.title = '';
    this.entityActionsService.addActivity(activity);
  }
}
