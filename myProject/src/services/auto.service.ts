import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn1: boolean = false;

  constructor() {}

  setLoggedIn(value: boolean) {
    this.loggedIn1 = value;
  }

  isLoggedIn1(): boolean {
    return this.loggedIn1;
  }
}