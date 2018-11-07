import { Component, OnInit, Input  } from '@angular/core';
import ServerService from 'src/app/server/server.service';

@Component({
  selector: 'app-tile-creator',
  templateUrl: './tile-creator.component.html',
  styleUrls: ['./tile-creator.component.css']
})
export class TileCreatorComponent implements OnInit {

  defaultButtons = [
    { name: 'Cancel', actionType: 'close' },
    { name: 'Create', actionType: 'accept' }
  ];

  modalTitle = 'Tile Creator';

  constructor(private serverService: ServerService) { }

  ngOnInit() {
  }

  closeCreator (actionType) {
    if (actionType === 'accept') {
      this.serverService.createTile();
    }
  }



}
