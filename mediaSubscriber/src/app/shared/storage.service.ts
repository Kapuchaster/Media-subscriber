import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveInStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getFormStorage(name) {
    return JSON.parse(localStorage.getItem(name));
  }

}
