import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies = [];
  currentPage = 1;
  imageBaseUrl = environment.images;

  constructor(private movieService: MovieService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMovies();
  }

  async loadMovies() {
    //loader
    const loading = await this.loadingCtrl.create({
      message: 'loading..',
      spinner: 'circular'
    });
    await loading.present();

    //subscribe to the service
    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res) => {
      loading.dismiss();
      this.movies = [...this.movies, ...res.results];
      console.log(res)
    })

  }

}
