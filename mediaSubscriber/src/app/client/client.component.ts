import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  activities = [new Activity('Sonic'), new Activity('Zelda')];
  inputClientName = '';

  constructor() { }

  ngOnInit() {
  }

  addClient() {
    this.activities.push(new Activity(this.inputClientName));
    this.inputClientName = '';
  }

}
