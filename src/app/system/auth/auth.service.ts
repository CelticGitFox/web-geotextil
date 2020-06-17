import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  public setAuth(token, user) {
    const now = new Date().getTime();
    localStorage.setItem('setupTime', now.toString());
    localStorage.setItem('token', token);
    localStorage.setItem('user', user);
  }

  public removeToken() {
    localStorage.clear();
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public getUser() {
    return localStorage.getItem('user');
  }

  public cerrarSesion() {
    localStorage.clear();
  }
}
