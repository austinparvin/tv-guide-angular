import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '../models/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() favoriteMovieEmmiter = new EventEmitter<IMovie>();
  constructor(private movieService: MovieService) {}

  ngOnInit() {}

  emitFavoriteMovie(movie: IMovie) {
    this.favoriteMovieEmmiter.emit(movie);
  }
}
