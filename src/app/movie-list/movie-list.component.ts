import { Component, OnInit } from '@angular/core';
import { IMovie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies: IMovie[] = [];
  randomNumber: number = 0;
  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
      this.randomNumber = Math.floor(Math.random() * this.movies.length);
      console.log('data', data);
    });
  }

  getMovies() {
    return this.movies;
  }
}
