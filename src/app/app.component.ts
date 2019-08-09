import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyBzCTETQYi1BlyCTWx4KKj5KYnDvH3r7Yg',
      authDomain: 'retro-lib.firebaseapp.com',
      databaseURL: 'https://retro-lib.firebaseio.com',
      projectId: 'retro-lib',
      storageBucket: 'gs://retro-lib.appspot.com/',
      messagingSenderId: '266290166497',
      appId: '1:266290166497:web:23e13c36a5cf31f6'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
