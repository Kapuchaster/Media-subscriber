import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveInStorage(name: any, value: any) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getFormStorage(name: any) {
    return JSON.parse(localStorage.getItem(name));
  }

}
