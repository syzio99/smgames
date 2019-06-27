import { Component, OnInit } from '@angular/core';
import { NewsComponent } from './../news/news.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navbarshow:boolean=false;
  showNavbar(){
    this.navbarshow = !this.navbarshow;
  }


}
