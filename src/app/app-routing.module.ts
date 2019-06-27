import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ShellComponent } from './shell/shell.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import {LoginComponent} from "./login/login.component";
import { MyOrderComponent } from './my-order/my-order.component';


const routes: Routes = [
  {path:"shell" ,component:ShellComponent},
  {path:"store" ,
   component:StoreComponent,
   children:[
   {path:"products",component:ProductsComponent},
   {path:"cart",component:CartComponent},
   {path:"check-out",component:CheckoutComponent},
   {path:"my-order",component:MyOrderComponent},
   {path:"order-sucess",component:OrderSuccessComponent},
   {path:"login",component:LoginComponent},
   {path:"admin/product",component:AdminProductsComponent},
   {path:"admin/order",component:AdminOrdersComponent},
   {path:"",redirectTo:"products",pathMatch:"full"},
   ]
  },
  {path:"",redirectTo:"/shell",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
