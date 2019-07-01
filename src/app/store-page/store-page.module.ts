import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { StoreRoutingModule } from './store-routing.module';
import { LogCompComponent } from './log-comp/log-comp.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations:[
    AdminOrdersComponent,
    AdminProductsComponent,
    CartComponent,
    CheckoutComponent,
    MyOrderComponent,
    OrderSuccessComponent,
    ProductsComponent,
    StoreComponent,
    StoreNavComponent,
    LogCompComponent,
    SigninComponent, 
    SignupComponent

  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
  providers: [AuthService],
  exports:[
    AdminOrdersComponent,
    AdminProductsComponent,
    CartComponent,
    CheckoutComponent,
    MyOrderComponent,
    OrderSuccessComponent,
    ProductsComponent,
    StoreComponent
  ],
})
export class StorePageModule { }