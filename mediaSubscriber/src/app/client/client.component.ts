import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { StorageService } from '../shared/storage.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  activities = [new Activity('Sonic'), new Activity('Zelda')];
  inputClientName = '';

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.activities = this.storageService.getFormStorage('activities');
  }

  addClient() {
    this.activities.push(new Activity(this.inputClientName));
    this.inputClientName = '';
    this.storageService.saveInStorage('activities', this.activities);
  }

}
