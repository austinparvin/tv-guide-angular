import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoviesResponse } from './models/moviesResponse';
import { Observable } from 'rxjs';
import { ICreditsResponse } from './models/creditsResponse';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any;
  cast: any;
  private movieUrl: string =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=37569221602edd820d2cf3580496deaa';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<IMoviesResponse> {
    this.movies = this.http.get<IMoviesResponse>(this.movieUrl);
    return this.movies;
  }

  getMovieCast(movieId: string): Observable<ICreditsResponse> {
    this.cast = this.http.get<ICreditsResponse>(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=37569221602edd820d2cf3580496deaa&language=en-US`
    );
    return this.cast;
  }
}
