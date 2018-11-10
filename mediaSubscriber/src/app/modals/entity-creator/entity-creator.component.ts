import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';
import EntityActionsService from 'src/app/shared/entity-actions/entity-actions.service';
import Entity from 'src/app/entity';

@Component({
  selector: 'app-entity-creator',
  templateUrl: './entity-creator.component.html',
  styleUrls: ['./entity-creator.component.css']
})
export class EntityCreatorComponent implements OnInit {

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Create', actionType: 'accept' }
  ];

  modalTitle: String = 'Entity Creator';
  color: String;
  type: String;

  constructor(private storageService: StorageService,
              private entityActionsService: EntityActionsService) { }

  closeCreator (actionType) {
    if (actionType === 'accept') {
      this.createEntity();
    }
  }

  createEntity () {
    const entity = new Entity(this.type, this.color || '#929292');
    this.type = '';
    this.color = '';
    this.entityActionsService.addEntity(entity);
  }

  ngOnInit() {
  }

}
