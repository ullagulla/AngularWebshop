import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { OneProductpageComponent } from './components/one-productpage/one-product.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component'
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { ThankyouComponent } from './components/thankyou/thankyou.component'
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    ProductpageComponent,
    OneProductpageComponent,
    HomeComponent,
    AdminComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterTestingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
