import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './Components/Pages/cart/cart.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tagid', component: HomeComponent },
  { path:'food/:id', component: FoodComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
