import { Injectable } from '@angular/core';
import { User } from '../Usuario/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private logeado;
  public userLogeado:User;

  constructor() { 
    this.logeado = false;
  }

  setUserLogeado(user:User){
    this.logeado = true;
    this.userLogeado = user;
    localStorage.setItem('User',JSON.stringify(user));

  }

  getUserLogeado(){
    return JSON.parse(localStorage.getItem('User'));
  }
}
