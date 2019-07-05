import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/store-page/services/auth.service';
import { AdminCheckService } from 'src/app/store-page/services/admin-check.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public auth:AuthService, public a:AdminCheckService) { }

  ngOnInit() {
  }

  navbarshow:boolean=false;
  showNavbar(){
    this.navbarshow = !this.navbarshow;
  }

  dropDownShow:boolean=false;
  dropDown(){
    this.dropDownShow = !this.dropDownShow;
  }

  showvar = ()=>{ return this.a.canActivate();}
}
