import { Subject, Observable } from 'rxjs';
import MovieProduct from '../models/MovieProduct';
import Order from '../models/Order';
import Category from '../models/Category';

export default interface Ihttpservice {
  theMovies: Subject<MovieProduct[]>;
  theMovie: Subject<MovieProduct>;
  theCategories: Subject<Category[]>;
  theOrders: Subject<Order[]>;
  todaysDate: string;

  getMovieProducts(): void;
  getMovieProduct(id: number): void;
  postOrder(order: Order): void;
  getOrders(): void;
  deleteOrder(id: number): void;
  getCategories(): void;
  searchMovie(term: String): Observable<MovieProduct[]>

}
