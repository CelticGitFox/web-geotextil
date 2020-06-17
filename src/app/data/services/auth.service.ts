import { Injectable } from '@angular/core';
import { AngularFireAuth} from "@angular/fire/auth";
import { auth } from "firebase/app";
import { User } from 'firebase';
import {first} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:User;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  async login(email:string, password:string){
    try{
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    }
    catch (e) {
      console.log(e);
  }
  }

  async register(email:string, password:string){
    try{
      return await this.afAuth.createUserWithEmailAndPassword(email, password)
    }
    catch (e) {
      console.log(e);
    }
  }

  async logout(){
    try {
      await this.afAuth.signOut();
    }
    catch (e) {
      console.log(e);
    }
  }
  getCurrentUser(){
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
    }
    catch (e) {
      console.log(e);
    }
  }
}
