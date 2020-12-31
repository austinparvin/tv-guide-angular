import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoviesResponse } from './models/moviesResponse';
import { Observable } from 'rxjs';
import { ICreditsResponse } from './models/creditsResponse';
import { IMovie } from './models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovie(movieId: string): Observable<any> {
    return this.http.get<IMovie>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=37569221602edd820d2cf3580496deaa&language=en-US`
    );
  }

  getMovies(): Observable<IMoviesResponse> {
    return this.http.get<IMoviesResponse>(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=37569221602edd820d2cf3580496deaa'
    );
  }

  getMovieCast(movieId: string): Observable<ICreditsResponse> {
    return this.http.get<ICreditsResponse>(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=37569221602edd820d2cf3580496deaa&language=en-US`
    );
  }
}
