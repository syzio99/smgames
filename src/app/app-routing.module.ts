import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TrendingComponent } from './trending/trending.component';
const routes: Routes = [
  {path:"shell" ,component:ShellComponent},
  {path:"store" ,component:StoreComponent},
  {path:"",redirectTo:"/shell",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
