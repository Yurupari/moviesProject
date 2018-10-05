import { Component, OnInit } from '@angular/core';
import { PopularMoviesComponent } from '../popular-movies/popular-movies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;

  constructor(public movieService: PopularMoviesComponent) {

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });

  }

  ngOnInit() {
  }

}
