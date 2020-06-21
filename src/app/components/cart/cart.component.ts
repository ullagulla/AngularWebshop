import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import Movie from 'src/app/models/MovieProduct';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss',]
})
export class CartComponent implements OnInit {

  totalPrice = 0;

  itemsInCart: Movie[] = JSON.parse(localStorage.getItem("cart")) || []

  constructor(private cartService: CartService, private route: Router) { }

  ngOnInit(): void {
    this.total();
  }

  removeItemInCart(movie) {
    const foundItem = this.itemsInCart.find(m => m.id == movie.id)
    foundItem.quantity--

    if(foundItem.quantity == 0) {
      const filterItems = this.itemsInCart.filter(m => {
        if (m.quantity >= 1) {
          return m;
        }
      });
      this.itemsInCart = filterItems;
    }

    localStorage.setItem("cart", JSON.stringify(this.itemsInCart))
    this.total()
  }

  decreaseInCart(movie) {
    const foundItem = this.itemsInCart.find(m => m.id == movie.id)
    foundItem.quantity--

    if(foundItem.quantity == 0) {
      const filterItems = this.itemsInCart.filter(m => {
        if (m.quantity >= 1) {
          return m;
        }
      });
      this.itemsInCart = filterItems;
    }

    localStorage.setItem("cart", JSON.stringify(this.itemsInCart))
    this.total()
  }

  increaseInCart(movie) {
    const foundItem = this.itemsInCart.find(m => m.id == movie.id)
    foundItem.quantity++

    localStorage.setItem("cart", JSON.stringify(this.itemsInCart))
    this.total()
  }

  clearCart(){
    this.cartService.clearCart()
  }

  total(){
    let calcPrice = 0;
    this.itemsInCart.forEach(item => {
      calcPrice += item.quantity * item.price
    })
    this.totalPrice = calcPrice;
  }

  goToCheckout() {
    this.route.navigate(["/checkout"])
  }

}
