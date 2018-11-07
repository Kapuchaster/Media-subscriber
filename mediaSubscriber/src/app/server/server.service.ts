import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
declare var jquery: any;
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export default class ServerService {

  constructor() { }

  createTile(): Observable<string> {
    $('#test').modal('show');
    return of('HEROES');
  }

  getReadyTile(): Observable<string> {
    return of('Ready');
  }

}
