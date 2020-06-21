import { Injectable } from '@angular/core';
import MovieProduct from '../models/MovieProduct';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Ihttpservice from './ihttpservice';
import Order from '../models/Order';
import { DatePipe } from '@angular/common';
import { tap } from 'rxjs/operators';
import Category from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements Ihttpservice {

  theMovies = new Subject<MovieProduct[]>();
  theMovie = new Subject<MovieProduct>();

  theCategories = new Subject<Category[]>();
  theOrders = new Subject<Order[]>();
  todaysDate: string;

  baseUrl: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/search";

  constructor( private http: HttpClient, datePipe: DatePipe ) {
    this.todaysDate = datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm:ss');
   }

  getMovieProducts(): void {
    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products")
    .subscribe((data: MovieProduct[]) => {
      data.map(m => {
        m.quantity = 1;
      })
      this.theMovies.next(data);
    });
  }

  getMovieProduct(id: number) {
    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/products/" + id)
    .subscribe((data: MovieProduct) => {
      data.quantity = 1;
      this.theMovie.next(data);

    })
  }

  postOrder(order: Order) {
    this.http.post<Order>("https://medieinstitutet-wie-products.azurewebsites.net/api/orders", {
      companyId: order.companyId,
      created: this.todaysDate,
      createdBy: "förnamn: " + order.customer.firstname + " efternamn: " + order.customer.lastname + " gata: " + order.customer.address.street + " postnummer: " + order.customer.address.zip + " stad: " + order.customer.address.city,
      paymentMethod: order.paymentmethod,
      totalPrice: order.totalPrice,
      orderRows: order.products
    })
    .subscribe((data) => {
      console.log(data)
    })
  }

  getOrders() {
    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=8008")
    .subscribe((data: any) => {
      this.theOrders.next(data)
    })
  }

  deleteOrder(id: Number) {
    this.http.delete("https://medieinstitutet-wie-products.azurewebsites.net/api/orders/" + id)
    .subscribe((data) => {
      console.log(data)
    })
  }

  getCategories() {
    this.http.get("https://medieinstitutet-wie-products.azurewebsites.net/api/categories")
    .subscribe((data: Category[])=> {
      this.theCategories.next(data);
      console.log(data)
    })
  }

  searchMovie(term: string): Observable<MovieProduct[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<MovieProduct[]>(`${this.baseUrl}?=${term}`)
    .pipe();
  }
}
