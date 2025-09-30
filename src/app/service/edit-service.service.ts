import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditServiceService {

  constructor() { }

  isValidUser: boolean = true;

  setValidUSer() {
    return this.isValidUser = true;
  }
  isLoging() {
    return this.isValidUser;
  }
}
