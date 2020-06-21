import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import MovieProduct from 'src/app/models/MovieProduct';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.service.clearCart();

  }

}
