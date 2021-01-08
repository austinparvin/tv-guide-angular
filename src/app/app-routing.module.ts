import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieWatchListComponent } from './movie-watch-list/movie-watch-list.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:movieId', component: MovieDetailsComponent },
  { path: 'watchlist', component: MovieWatchListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
