import { Component, OnInit, Input  } from '@angular/core';
import ServerService from 'src/app/server/server.service';
import ActivityActionsService from 'src/app/shared/activity-actions/activity-actions.service';
import Activity from 'src/app/activity';

@Component({
  selector: 'app-tile-creator',
  templateUrl: './tile-creator.component.html',
  styleUrls: ['./tile-creator.component.css']
})
export class TileCreatorComponent implements OnInit {
  @Input() entity: Activity;

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Create', actionType: 'accept' }
  ];

  modalTitle = 'Tile Creator';
  title = '';

  constructor(private serverService: ServerService,
              private activityActionsService: ActivityActionsService) { }

  ngOnInit() {
  }

  closeCreator (actionType) {
    if (actionType === 'accept') {
      this.createActivity();
    }
  }

  createActivity () {
    console.log(this.entity.title);
    // const activity = new Activity(this.title, 'this.color' || '#929292');
    // this.title = '';
    // this.activityActionsService.addActiveActivity(activity);
  }
}
