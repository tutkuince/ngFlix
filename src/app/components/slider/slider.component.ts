import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit{
  constructor(private moviesService: MoviesService) {
  }
  // $ suffix means this is Observable<Object>
  movies$ = this.moviesService.getPopularMovies();

  slideIndex: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.slideIndex++;
    }, 5000);
  }
}
