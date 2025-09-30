import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isValidUser: boolean = false;

  setValidUSer() {
    return this.isValidUser = true;
  }
  isLoggedIn() {
    return this.isValidUser
  }
}
