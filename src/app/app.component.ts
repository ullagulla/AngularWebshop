import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpService } from './services/http.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import MovieProduct from './models/MovieProduct';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  movies: Observable<MovieProduct[]>;
  private searchTerms = new Subject<string>();

  itemsInCart: MovieProduct[] = JSON.parse(localStorage.getItem("cart")) || []

  constructor(private http: HttpService) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {

    this.movies = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.http.searchMovie(term)),
    );
  }

  openMenu() {
    document.getElementById("mySidenav").classList.toggle("active-menu");
  }

  closeMenu() {
    document.getElementById("mySidenav").classList.toggle("active-menu");
  }

}
