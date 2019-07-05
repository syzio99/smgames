import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
// /////////////////////////////////////////////////////
import { AppRoutingModule } from './app-routing.module';
import { PageFooterModule } from './page-footer/page-footer.module';
import { MainPageModule } from './main-page/main-page.module';
import { StorePageModule } from './store-page/store-page.module';
// /////////////////////////////////////////////////////
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
// import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from './../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavigationbarModule } from './navigationbar/navigationbar.module';


@NgModule({
  declarations: [
    AppComponent,   
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MainPageModule,
    StorePageModule,
    PageFooterModule,
    NavigationbarModule,
    AppRoutingModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
