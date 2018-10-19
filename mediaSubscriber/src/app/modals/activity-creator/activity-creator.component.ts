import { Component, OnInit } from '@angular/core';

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

  closeCreator (actionType) {
    console.log(this.title, this.color);
  }

  constructor() { }

  ngOnInit() {
  }

}
