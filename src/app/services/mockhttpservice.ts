import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Ihttpservice from './ihttpservice';
import Movie from '../models/MovieProduct';
import Category from '../models/Category';
import Order from '../models/Order';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class MockHttpService implements Ihttpservice {

  theMovies: Subject<Movie[]>;
  theMovie: Subject<Movie>;
  theCategories: Subject<Category[]>;
  theOrders: Subject<Order[]>;
  todaysDate: string;

  constructor(datePipe: DatePipe) {
    this.todaysDate = datePipe.transform(Date.now(), 'yyyy-MM-ddThh:mm:ss');
  }

  private movieProducts: Movie[] = [{
      name: 'Star Wars',
      year: 2020,
      imageUrl: '...',
      description: '',
      price: 20,
      id: 1,
      quantity: 1,
      productCategory: [{
        categoryId: 5,
        category: null,
      }]
    },
    {
      name: 'LOTR',
      year: 2008,
      imageUrl: '...',
      description: '',
      price: 20,
      id: 1,
      quantity: 1,
      productCategory: [{
        categoryId: 5,
        category: null,
      }]
    },
    {
      name: 'Harry Potter',
      year: 1998,
      imageUrl: '...',
      description: '',
      price: 20,
      id: 1,
      quantity: 1,
      productCategory: [{
        categoryId: 5,
        category: null,
      }]
    },
  ];

  getMovieProducts(): void {
    this.theMovies.next(this.movieProducts);
  }

  movieProduct: Movie = {
    name: 'Harry Potter',
    year: 1998,
    imageUrl: '...',
    description: '',
    price: 20,
    id: 1,
    quantity: 1,
    productCategory: [{
      categoryId: 5,
      category: null,
    }]
  }

  getMovieProduct() {
    this.theMovie.next(this.movieProduct);
  }

  order: Order[] = [{
    id: 1,
    companyId: 8008,
    customer: {
      firstname: "Ulrika",
      lastname: "Alm",
      address: {
        street: "Banergatan 52",
        zip: "115 26",
        city: "Stockholm",
      },
    },
    paymentmethod: "Mastercard",
    totalPrice: 499,
    products: [{
      productId: 76,
      quantity: 2,
    }],
  },
  ];

  postOrder(order: Order) {}

  getOrders() {
    this.theOrders.next(this.order)
  }

  deleteOrder(id: number) {
    this.order.filter((order) => {
      if (order.id == id) {
        return;
      } else {
        return this.order;
      }
    });
  }

  categories: Category[] = [
    {
      id: 5,
      name: 'Action',
    },
    {
      id: 6,
      name: 'Töntig',
    },
  ];

  getCategories() {
    this.theCategories.next(this.categories)
  }

  searchMovie(term: String): import("rxjs").Observable < Movie[] > {
    throw new Error("Method not implemented.");
  }

}
