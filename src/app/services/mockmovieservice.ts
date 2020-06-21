import {
  Injectable
} from '@angular/core';
import {
  Subject
} from 'rxjs';
import Movie from '../models/MovieProduct';
import Category from '../models/Category';
import Order from '../models/Order';
import { IMovieService } from './iMovieService';

@Injectable({
  providedIn: 'root',
})
export class MockMovieService implements IMovieService {

  constructor() {}
  cart: Movie[] = JSON.parse(localStorage.getItem('cart')) || [];

  addToCart(m: Movie): void {
    this.cart.push(m);
  }

  clearCart(): void {
    this.cart = [];
  }

}
