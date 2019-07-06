import { Injectable } from '@angular/core';
import {auth} from "firebase/app";
import {AngularFireAuth} from "@angular/fire/auth";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import { UserService } from './user.service';


@Injectable({providedIn: 'root'})
export class AuthService {

  user$ : Observable<firebase.UserInfo>;
  
  constructor(private afAuth:AngularFireAuth,
              private route:ActivatedRoute,
              private router:Router,
              private userService:UserService
    ){
    this.user$ = afAuth.authState;
  }

  google(){
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl")||"/store";
    localStorage.setItem("returnUrl",returnUrl);
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(us=> {
      if(us) {
        this.userService.save(us.user);
        let returnUrl = localStorage.getItem("returnUrl");
        this.router.navigateByUrl(returnUrl);
      }
    });
  }
  
  signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(["store"])
    })
  }

  idPass(email:string,pass:string){
    this.afAuth.auth.signInWithEmailAndPassword(email,pass).then(
      us=> {
        if(us) {
          this.userService.save2(email,pass);
          let returnUrl = localStorage.getItem("returnUrl");
          this.router.navigateByUrl(returnUrl);
        }
      }
    );
  }
}