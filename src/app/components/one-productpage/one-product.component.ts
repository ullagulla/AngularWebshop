import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from 'src/app/models/MovieProduct';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-one-productpage',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss']
})
export class OneProductpageComponent implements OnInit {
  id: number;
  currentMovie: Movie;
  showMovie: boolean = false;

  cart: Movie[] = JSON.parse(localStorage.getItem("cart")) || []

  constructor(
    private route: ActivatedRoute,
    private service: HttpService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(p => {
      this.id = p.id;
      this.service.theMovie.subscribe((m: Movie) => {
        this.currentMovie = m;
        this.showMovie = true;
      });
      this.service.getMovieProduct(this.id);
    });
  }

  addToCart(cartMovie: Movie) {
    const foundItem = this.cart.find(m => m.id == cartMovie.id)

    if (foundItem) {
      cartMovie.quantity++
    }
    else {
      this.cartService.addToCart(cartMovie);
      this.cart.push(cartMovie)
    }

    localStorage.setItem("cart", JSON.stringify(this.cart))
  }
}


