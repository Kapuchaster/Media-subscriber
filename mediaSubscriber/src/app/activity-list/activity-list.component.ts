import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../activity';
import { ListActionsService } from '../shared/list-actions.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
@Input() activities: Activity[];
  public isCollapsed = false;

  constructor(private listActionsService: ListActionsService) { }

  ngOnInit() {
  }

  deleteActivity(name) {
    this.listActionsService.deleteClient(name);
  }

}
