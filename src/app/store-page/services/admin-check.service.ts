import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { map } from 'rxjs/operators';
// import { UserModel } from './users.model';

@Injectable({providedIn: 'root'})
export class AdminCheckService implements CanActivate {

  constructor(private auth:AuthService,private userService:UserService) { }
  
  canActivate(): Observable<boolean> {
    return this.auth.user$.pipe(
      switchMap(user => this.userService.get(user.uid)
        .pipe(map(
          (appUser: any) => appUser.admin)
        )
      )
    );
  }
}
