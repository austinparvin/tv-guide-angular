# Tv Guide

A "TV guide" website that uses an API, and few pages to display what is currently showing.

# Objectives

- Recreate a project previously developed in React, in Angular
- Work with RouterLink
- Use Services, Models, and Components

# Includes: 

- [ANGULAR](https://angular.io/start)
- [ROUTERLINK](https://angular.io/api/router/RouterLink)
- [HTTPCLIENT](https://angular.io/api/common/http/HttpClient)

- [API INTEGRATION](https://developers.themoviedb.org/3/getting-started/introduction)

# Requirements 

- Use [The Movie Db API](https://developers.themoviedb.org/3/getting-started/introduction) 
- Create a home page that has:
  - the list of all "Top Trending" movies, returned from this API `https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>`
  - this page should also highlight a random "Top Rated" TV show at the top of the page
- Create a `/movie/:movieId page` that shows all the details for a given show and the cast of the show. The cast and crew end point is `https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US`
 
## Live Site

[LIVE SITE](https://austinparvin-tv-guide-angular.netlify.app/)

![TV Guide Live Site](http://g.recordit.co/vWwo4XTyP1.gif)

## Featured Code

### MovieService using typed Oberservables to create functions to set http get responses to class variables

```TypeScript
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
 ```
 
