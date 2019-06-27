import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private service:AuthService) { }

  logIn(){
    this.service.googleLogIn();
    this.service.user$.subscribe(userData => {
      console.log(userData);
    });
  }

}
  