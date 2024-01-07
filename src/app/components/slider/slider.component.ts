import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {

  movies: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.http.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=b337195cb1a3c75cde02b2b49fcf4ef1"
    ).subscribe(data => {
      this.movies = data;
    });
  }
}
