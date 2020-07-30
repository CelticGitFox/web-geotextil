import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import {ProfileAdmModel} from '../model/profileAdm.model';
import {finalize} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileAdmService {
  public uploadPercent: Observable<number>;
  public urlImage: Observable<number>;

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthService
  ) {}

  // Save o update profile
  public createProfile(profileAdmModel: ProfileAdmModel) {
    return this.firestore.collection<ProfileAdmModel>('users').doc(profileAdmModel.email).set(profileAdmModel);
  }

  // Get data profile
  public getProfile(email: string) {
    return this.firestore.collection<ProfileAdmModel>('users').doc(email).valueChanges();
  }

}
