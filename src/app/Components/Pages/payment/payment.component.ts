import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/Models/order';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  order: Order = new Order();

  constructor(orderService: OrderService, private cartService: CartService, router: Router) {
  
    this.order = orderService.getNewOrder();
    if(this.order)
      cartService.clearCart();
    else
        router.navigateByUrl('/checkout');

  }

  ngOnInit(): void {
  }

}
