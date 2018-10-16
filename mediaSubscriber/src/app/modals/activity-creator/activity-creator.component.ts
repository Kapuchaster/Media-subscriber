import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-creator',
  templateUrl: './activity-creator.component.html',
  styleUrls: ['./activity-creator.component.css']
})
export class ActivityCreatorComponent implements OnInit {

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Accept', actionType: 'accept' }
  ];

  title: String = 'Activity Creator';

  constructor() { }

  ngOnInit() {
  }

}
