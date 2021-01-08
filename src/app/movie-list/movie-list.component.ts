import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IMovie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: IMovie[] = [];
  randomNumber: number = 0;
  favoritedMovie: IMovie | undefined;

  // unSub Subjects are required when we subscribe to an Observable
  // Technically http requests act as a take once, meaning they aren't actively looking to a response once they get one back,
  
  private unSub = new Subject<void>();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.moviesOb$
      .pipe(takeUntil(this.unSub))
      .subscribe((data) => {
        this.movies = data;
        this.randomNumber = Math.floor(Math.random() * this.movies.length);
      });
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }

  getMovies() {
    return this.movies;
  }

  setParentFavoriteMovie(movie: IMovie) {
    this.favoritedMovie = movie;
  }
}
