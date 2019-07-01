import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ///////////////////////////////////////////////////////////////////
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:"store",loadChildren:"./store-page/store-page.module#StorePageModule"},
  {path:"shell",loadChildren:"./main-page/main-page.module#MainPageModule"},
  {path:"",redirectTo:"shell",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
