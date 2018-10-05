import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PopularMoviesComponent {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = '6fff650466b80f6d7fc65802db583c9b';
  private id: number;

  constructor(public _http: HttpClient) { }
  
  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

}
