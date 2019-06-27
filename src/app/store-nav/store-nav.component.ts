import { Component } from '@angular/core';
import { AuthService } from  '../services/auth.service';

@Component({
  selector: 'store-nav',
  templateUrl: './store-nav.component.html',
  styleUrls: ['./store-nav.component.css']
})
export class StoreNavComponent{

  constructor(private service:AuthService) { }
  logOut(){
    this.service.logout();
  }

  navbarshow:boolean=false;
  showNavbar(){
    this.navbarshow = !this.navbarshow;
  }

}
