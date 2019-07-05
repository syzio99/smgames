import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
// import { MainPageModule } from '../main-page/main-page.module';
// import { StorePageModule } from '../store-page/store-page.module';
import { NavigationbarRoutingModule } from './navigationbar.routing.module';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    // MainPageModule,
    // StorePageModule,
    NavigationbarRoutingModule
  ],
  exports: [NavigationComponent],
})
export class NavigationbarModule { }
