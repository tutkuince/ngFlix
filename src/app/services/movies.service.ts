import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MoviesDto } from '../types/movie';

@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      "https://api.themoviedb.org/3/movie/popular?api_key=b337195cb1a3c75cde02b2b49fcf4ef1"
    )
  }
}
