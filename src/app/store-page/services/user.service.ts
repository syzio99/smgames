import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, } from 'angularfire2/database';
import {User} from "firebase";
import { Observable } from 'rxjs';
// import { UserModel } from './users.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database:AngularFireDatabase,) { }
  save(user:User){
    this.database.object("/users/"+user.uid).update({
      name:user.displayName,
      email:user.email,
      profileUrl:user.photoURL,
      uid:user.uid
    })
  }
  get(uid:string):Observable<any>{
    return this.database.object('/users/'+uid).valueChanges();
  }
  save2(email,pass){
    this.database.object("/users2/"+email).update({
      name:pass,
      email:email,
    })
  }
}
