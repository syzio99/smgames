import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path:"shell",
    loadChildren:()=>import("../main-page/main-page.module").then(mod => mod.MainPageModule)
  },

  {
    path:"store",
    loadChildren: ()=>import("../store-page/store-page.module").then(mod=> mod.StorePageModule)
  },

  {
    path:"support",
    loadChildren: ()=>import("../page-footer/page-footer.module").then(mod=> mod.PageFooterModule)
  },

  {
    path:"",
    redirectTo:"/shell",
    pathMatch:"full"
  }
]

@NgModule({
  imports: [
  RouterModule.forRoot(routes), 
  ],
  exports: [RouterModule]
})
export class NavigationbarRoutingModule { }
