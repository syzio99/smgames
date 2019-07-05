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
import { AuthGardService } from './services/auth-gard.service';
import { AdminCheckService } from './services/admin-check.service';
import { NewProductComponent } from './admin/new-product/new-product.component';

const mainRoutes: Routes = [
  {path:"",
   component:StoreComponent,
    children:[
      {path:"products",component:ProductsComponent},
      {path:"cart",component:CartComponent},
      { path:"log",
        component:LogCompComponent,
        children:[
        {path:"signin",component:SigninComponent},
        {path:"signup",component:SignupComponent},
        {path:"",redirectTo:"signup",pathMatch:"full"}
        ]
      },
      
      {path:"checkout",component:CheckoutComponent,canActivate:[AuthGardService]},
      {path:"my-Orders",component:MyOrderComponent,canActivate:[AuthGardService]},
      {path:"order-success",component:OrderSuccessComponent,canActivate:[AuthGardService]},
      
      {path:"manage-orders",component:AdminOrdersComponent,canActivate:[AuthGardService,AdminCheckService]},
      {path:"manage-products",component:AdminProductsComponent,canActivate:[AuthGardService,AdminCheckService]},
      {path:"manage-products/new-products",component:NewProductComponent,canActivate:[AuthGardService,AdminCheckService]},

      {path:"",redirectTo:"products",pathMatch:"full"}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
