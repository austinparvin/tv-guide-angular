import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: any;
  @Output() number = new EventEmitter<number>();
  constructor(private movieService: MovieService) {}

  // functionality that send data back up to the parent


  ngOnInit() {
  }

  choseOption(option: number){
    this.number.emit(option);
  }
}
