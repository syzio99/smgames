import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
// /////////////////////////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShellComponent } from './shell/shell.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { NewsComponent } from './news/news.component';
import { GamesComponent } from './games/games.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

import { NotFoundComponent } from './not-found/not-found.component';

import { StoreComponent } from './store/store.component';
import { StoreNavComponent } from './store-nav/store-nav.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';

import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import { environment } from './../environments/environment';
import { AuthService } from './services/auth.service';
// import { AuthGardService } from './auth-gard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ShellComponent,
    FooterComponent,
    HomeComponent,
    TrendingComponent,
    NewsComponent,
    AboutUsComponent,
    GamesComponent,
    StoreComponent,
    NotFoundComponent,
    StoreNavComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
