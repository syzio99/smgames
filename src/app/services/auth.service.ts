import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ : Observable<firebase.UserInfo>;
  
  constructor(public afAuth:AngularFireAuth) {
    this.user$ = afAuth.authState;
   }

  googleLogIn(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  logout(){
    this.afAuth.auth.signOut()
  }
}
