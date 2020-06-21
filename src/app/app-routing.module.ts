import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductpageComponent } from './components/productpage/productpage.component';
import { OneProductpageComponent } from './components/one-productpage/one-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "products", component: ProductpageComponent},
  { path: "products/:id", component: OneProductpageComponent },
  { path: "cart", component: CartComponent},
  { path: "checkout", component: CheckoutComponent },
  { path: "thankyou", component: ThankyouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
