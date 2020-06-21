import { Injectable } from '@angular/core';
import Movie from '../models/MovieProduct';
import { IMovieService } from './iMovieService';

@Injectable({
  providedIn: 'root'
})
export class CartService implements IMovieService {

  itemsInCart: Movie[] = JSON.parse(localStorage.getItem("cart")) || []

  constructor() { }
  getItemsInCart() {
    return this.itemsInCart;
  }

  addToCart(cartMovie) {
    this.itemsInCart.push(cartMovie);
    localStorage.setItem("cart", JSON.stringify(this.itemsInCart))

  }

  clearCart() {
    localStorage.setItem('cart', '[]');
  }

}
