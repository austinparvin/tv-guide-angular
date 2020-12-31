import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movie: any;
  cast: any;

  private unSub = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const movieIdFromRoute = this.route.snapshot.paramMap.get('movieId');

    if (movieIdFromRoute) {
      this.movieService
        .getMovie(movieIdFromRoute)
        .pipe(takeUntil(this.unSub))
        .subscribe((data) => {
          this.movie = data;
        });

      this.movieService
        .getMovieCast(movieIdFromRoute)
        .pipe(takeUntil(this.unSub))
        .subscribe((data) => {
          this.cast = data.cast;
        });
    }
  }

  ngOnDestroy(): void {
    this.unSub.next();
    this.unSub.complete();
  }
}
