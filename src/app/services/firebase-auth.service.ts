import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor(private authService: AngularFireAuth) { }

  login(email, password) {
    return this.authService.signInWithEmailAndPassword(email, password);
  }
  loginWithPopUp() {
    return this.authService.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logOut() {
    return this.authService.signOut();
  }
}
