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
  chosenOption: number = 0;

  private unSub = new Subject<void>();

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getMovies()
      .pipe(takeUntil(this.unSub))
      .subscribe((data) => {
        this.movies = data.results;
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

  displayOption(option: number) {
    this.chosenOption = option;
  }
}
