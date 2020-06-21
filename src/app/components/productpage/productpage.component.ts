import { Component, OnInit } from '@angular/core';
import Movie from 'src/app/models/MovieProduct';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  movieProducts: Movie[] = [];
  categories;
  actionMovies;
  thrillerMovies;
  comedyMovies;
  sciFiMovies;
  allMovies = false;
  actionControl = false;
  thrillerControl = false;
  comedyControl = false;
  sciFiControl = false;

  constructor(private service: HttpService, private route: Router) { }

  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies() {
    this.service.theMovies.subscribe((m) => {
      this.movieProducts = m.filter((m) => {
        if (m.name === null && m.imageUrl === null) {
          return;
        }
        if (m.name === "" && m.imageUrl === "") {
          return;
        }
        this.allMovies = true;
        return m;
      });
    });

    this.service.theCategories.subscribe((category) => {
      this.categories = category;
    })

    this.service.getMovieProducts();
    this.service.getCategories();
  }

  goToProduct(movie) {
    this.route.navigate(["/products", movie.id])
  }

  getAllMovieCategories() {
    this.service.theMovies.subscribe((m) => {
      this.movieProducts = m.filter((m) => {
        if (m.name === null && m.imageUrl === null) {
          return;
        }
        if (m.name === "" && m.imageUrl === "") {
          return;
        }
        this.allMovies = true;
        return m;
      });
    });
    this.service.getMovieProducts();

  }

  showCategories() {
    document.getElementById("filter-categories").classList.toggle("d-flex")
  }

  filterAction() {
    this.actionMovies = this.movieProducts.filter((m) => {
      if (m.name === null && m.imageUrl === null) {
        return;
      }
      if (m.name === "" && m.imageUrl === "") {
        return;
      }
      for (let i = 0; i < m.productCategory.length; i++) {
        const a = m.productCategory[i].categoryId;
        if (a == this.categories[0].id) {
          this.allMovies = false;
          this.thrillerControl = false;
          this.actionControl = true;
          this.comedyControl = false;
          this.sciFiControl = false;
          return m;
        } else {
          return;
        }
      }
    });
  }


  filterThriller() {

    this.thrillerMovies = this.movieProducts.filter((m) => {
      if (m.name === null && m.imageUrl === null) {
        return;
      }
      if (m.name === "" && m.imageUrl === "") {
        return;
      }
      for (let i = 0; i < m.productCategory.length; i++) {
        const a = m.productCategory[i].categoryId;
        if (a == this.categories[1].id) {
          this.allMovies = false;
          this.thrillerControl = true;
          this.actionControl = false;
          this.comedyControl = false;
          this.sciFiControl = false;
          return m;
        } else {
          return;
        }
      }
    });
  }

  filterComedy(){
    this.comedyMovies = this.movieProducts.filter((m) => {
      if (m.name === null && m.imageUrl === null) {
        return;
      }
      if (m.name === "" && m.imageUrl === "") {
        return;
      }
      for (let i = 0; i < m.productCategory.length; i++) {
        const a = m.productCategory[i].categoryId;
        if (a == this.categories[2].id) {
          this.allMovies = false;
          this.thrillerControl = false;
          this.actionControl = false;
          this.comedyControl = true;
          this.sciFiControl = false;
          return m;
        } else {
          return;
        }
      }
    });
  }

  filterSciFi() {
    this.sciFiMovies = this.movieProducts.filter((m) => {
      if (m.name === null && m.imageUrl === null) {
        return;
      }
      if (m.name === "" && m.imageUrl === "") {
        return;
      }
      for (let i = 0; i < m.productCategory.length; i++) {
        const a = m.productCategory[i].categoryId;
        if (a == this.categories[3].id) {
          this.allMovies = false;
          this.thrillerControl = false;
          this.actionControl = false;
          this.comedyControl = false;
          this.sciFiControl = true;
          return m;
        } else {
          return;
        }
      }
    });
  }
}
