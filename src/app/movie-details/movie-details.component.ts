import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  cast: any;
  movies: IMovie[] = [];
  movieIdFromRoute: any;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieIdFromRoute = this.route.snapshot.paramMap.get('movieId');
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data.results;
      this.movie = this.movies.find((movie) => {
        return movie.id === Number(this.movieIdFromRoute);
      });
    });

    this.movieService.getMovieCast(this.movieIdFromRoute).subscribe((data) => {
      this.cast = data.cast;
    });
  }
}
