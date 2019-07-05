import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'store-nav',
  templateUrl: './store-nav.component.html',
  styleUrls: ['./store-nav.component.css']
})
export class StoreNavComponent{

  constructor(public auth:AuthService) {
  }

  navbarshow:boolean=false;
  showNavbar(){
    this.navbarshow = !this.navbarshow;
  }
  
  dropDownShow:boolean=false;
  dropDown(){
    this.dropDownShow = !this.dropDownShow;
  }

}
