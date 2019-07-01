import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { StoreComponent } from './store/store.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LogCompComponent } from './log-comp/log-comp.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const mainRoutes: Routes = [
  {path:"",
   component:StoreComponent,
    children:[
      {path:"products",component:ProductsComponent},
      {path:"cart",component:CartComponent},
      {path:"checkout",component:CheckoutComponent},
      {path:"myorders",component:MyOrderComponent},
      {path:"ordersuccess",component:OrderSuccessComponent},
      {path:"manageorders",component:AdminOrdersComponent},
      {path:"manageproducts",component:AdminProductsComponent},
      { path:"log",
        component:LogCompComponent,
        children:[
        {path:"signin",component:SigninComponent},
        {path:"signup",component:SignupComponent},
        {path:"",redirectTo:"signup",pathMatch:"full"}
        ]
      },
      {path:"",redirectTo:"products",pathMatch:"full"}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
