import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ShellComponent } from './shell/shell.component';
import { TrendingComponent } from './trending/trending.component';
import { MainRoutingModule } from './main-routing.module';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    GamesComponent,
    HomeComponent,
    NewsComponent,
    ShellComponent,
    TrendingComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports: [
    AboutUsComponent,
    GamesComponent,
    HomeComponent,
    NewsComponent,
    ShellComponent,
    TrendingComponent,
    NavigationComponent
  ],
})
export class MainPageModule { }
