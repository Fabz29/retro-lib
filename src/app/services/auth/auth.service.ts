import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router: Router) {
  }


  createNewAuth(email: string, password: string) {
    return new Promise(((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    }));
  }

  signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOut() {
    firebase.auth().signOut();
  }

}
