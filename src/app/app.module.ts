import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

import { MovieWatchListComponent } from './movie-watch-list/movie-watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavBarComponent,
    MovieCardComponent,
    MovieDetailsComponent,
      MovieWatchListComponent
   ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
