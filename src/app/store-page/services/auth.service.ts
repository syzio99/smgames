import { Injectable } from '@angular/core';
import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {AngularFirestore,AngularFirestoreDocument} from "@angular/fire/firestore";

import {Observable,of} from "rxjs";
import {switchMap} from "rxjs/operators";
import { User } from './users.model';
import { stringify } from 'querystring';

@Injectable({providedIn: 'root'})
export class AuthService {

  user$ : Observable<firebase.UserInfo>;
  
  constructor(private afAuth:AngularFireAuth){
    this.user$ = afAuth.authState;
  }

  google(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  
  signOut(){
    this.afAuth.auth.signOut()
  }

  signIn(email:string,pass:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass);
  }
}
// export class AuthService{
//   user$:Observable<User>;
//   constructor(
//     public afAuth:AngularFireAuth,
//     public afs:AngularFirestore,
//     public router:Router
//   ){
//     this.user$ = this.afAuth.authState.pipe(
//       switchMap(user => {
//         if(user){return this.afs.doc<User>('users/${user.uid}').valueChanges();}
//         else {return of(null);}
//       })
//     )
//   }

//   async google(){
//     const provider = new auth.GoogleAuthProvider();
//     const credential = await this.afAuth.auth.signInWithPopup(provider);
//     return this.updateUserData(credential.user);
//   }

//   async signOut(){
//     await this.afAuth.auth.signOut();
//     return this.router.navigate(['/']);
//   }

//   private updateUserData({uid,email,displayName,photoURL}:User){
//     const userRef : AngularFirestoreDocument<User> = this.afs.doc('users/${uid}');
//     const data ={
//       uid,email,displayName,photoURL
//     };
//     return userRef.set(data,{merge:true});
//   }

// }