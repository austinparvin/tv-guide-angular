import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMoviesResponse } from './models/moviesResponse';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { ICreditsResponse } from './models/creditsResponse';
import { IMovie } from './models/movie';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  // BehaviorSubjects a a subset of Subjects, which are a subset of Observables.  They allow use to use .next()
  movies$ = new BehaviorSubject<IMovie[]>([]);
  moviesOb$: Observable<IMovie[]>;

  constructor(private http: HttpClient) {
    // timer(1000, 5000)
    //   .pipe(
    //     switchMap((data: any) => {
    //       return this.getMovies();
    //     }),
    //     tap((data: any) => {
    //       console.log('tap data', data);
    //     }),
    //     map((data: any) => {
    //       return data.results;
    //     })
    //   )
    //   .subscribe((data) => {
    //     this.movies$.next(data);
    //   });

    // timer(1000, 5000).pipe(
    //   switchMap(() => this.getMovies()),
    //   tap((data: any) => this.movies$.next(data.results))
    // )
    // .subscribe();

    // this reads: starting 1 second from now, every 5 seconds map the return of getMovies to return the results to our movieOb$ observable
    this.moviesOb$ = timer(1000, 5000).pipe(
      switchMap(() => this.getMovies()),
      map((data: any) => data.results)
    );

  }

  getMovie(movieId: string): Observable<IMovie> {
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
