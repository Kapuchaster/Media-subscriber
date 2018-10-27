import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';
import ActivityActionsService from 'src/app/shared/activity-actions/activity-actions.service';
import Activity from 'src/app/activity';

@Component({
  selector: 'app-activity-creator',
  templateUrl: './activity-creator.component.html',
  styleUrls: ['./activity-creator.component.css']
})
export class ActivityCreatorComponent implements OnInit {

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Create', actionType: 'accept' }
  ];

  modalTitle: String = 'Activity Creator';
  color: String;
  title: String;

  constructor(private storageService: StorageService,
              private activityActionsService: ActivityActionsService) { }

  closeCreator (actionType) {
    if (actionType === 'accept') {
      this.createActivity();
    }
  }

  createActivity () {
    const activity = new Activity(this.title, this.color || '#929292');
    this.title = '';
    this.color = '';
    this.activityActionsService.addActivity(activity);
  }

  ngOnInit() {
  }

}
