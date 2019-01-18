import { Injectable } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export default class ServerService {

  constructor() {

  }

  createTile() {
    $('#tile-creator').modal('show');
  }
}
