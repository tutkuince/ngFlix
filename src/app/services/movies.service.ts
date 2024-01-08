import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MoviesDto } from '../types/movie';

@Injectable()
export class MoviesService {
  private apiUrl: string = "https://api.themoviedb.org/3";
  private apiKey: string = "b337195cb1a3c75cde02b2b49fcf4ef1";

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`
    )
  }
}
