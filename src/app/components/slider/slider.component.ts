import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {imagesBaseUrl} from "../../constants/images-sizes";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger("slideFade", [
      state("void", style({opacity: 0})),
      transition("void <=> *", [animate("1s")])
    ])
  ]
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {
  }

  // $ suffix means this is Observable<Object>
  movies$ = this.moviesService.getPopularMovies();

  slideIndex: number = 0;

  ngOnInit() {
    this.changeSlide();
  }

  private changeSlide() {
    setInterval(() => {
      this.slideIndex++;
      if (this.slideIndex > 10) {
        this.slideIndex = 0;
      }
    }, 5000);
  }

  protected readonly imagesBaseUrl = imagesBaseUrl;
}
