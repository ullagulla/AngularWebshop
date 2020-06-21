import { Subject } from 'rxjs';
import Movie from '../models/MovieProduct';

export interface IMovieService {

  addToCart(m: Movie): void;
  clearCart(): void;

}
