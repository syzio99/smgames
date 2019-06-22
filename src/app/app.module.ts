import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './trending/trending.component';
import { NewsComponent } from './news/news.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GamesComponent } from './games/games.component';
import { StoreComponent } from './store/store.component';

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
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
