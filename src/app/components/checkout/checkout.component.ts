import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Movie from 'src/app/models/MovieProduct';
import { CartService } from 'src/app/services/cart.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutProducts: Movie[] = JSON.parse(localStorage.getItem("cart")) || []
  totalPrice = 0;

  order = this.fb.group({
    companyId: ["8008"],
    customer: this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      address: this.fb.group({
        street: ["", Validators.required],
        zip: ["", Validators.required],
        city: ["", Validators.required],
      }),
    }),
    paymentmethod: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private service: HttpService, private route: Router) {}

  ngOnInit(): void {
    this.total()
  }

  total(){
    let calcPrice = 0;
    this.checkoutProducts.forEach(item => {
      calcPrice += item.quantity * item.price
    })
    this.totalPrice = calcPrice;
  }

  save() {
    const newOrder = this.order.value;
    newOrder.totalPrice =  this.totalPrice;
    newOrder.products = [];
    const products = this.checkoutProducts.map((m) => {
      return {
        productId: m.id,
        amount: m.quantity
      }
    })
    products.forEach(product => {
      newOrder.products.push(product)
    });
    this.service.postOrder(newOrder)

    this.route.navigate(["/thankyou"])

  }

}
