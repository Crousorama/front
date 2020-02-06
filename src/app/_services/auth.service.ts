import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userObject: User;
  resolveqUser;
  accessToken = '';
  qUser = new Promise(resolve => this.resolveqUser = resolve);

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(res => {
      res.getIdToken(true).then((token) => {
        this.accessToken = token;
        this.userObject = res;
        this.resolveqUser(res);
      });
    });
  }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          this.userObject = res.user;
          resolve(res);
        });
    });
  }

  get user() {
    return this.userObject;
  }

  get currentUserObservable(): Observable<User> {
    return this.afAuth.authState;
  }
}
