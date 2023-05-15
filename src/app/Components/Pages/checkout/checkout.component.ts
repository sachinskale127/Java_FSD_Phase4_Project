import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Order } from 'src/app/Models/order';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  order: Order = new Order();
  checkoutForm !: FormGroup;
  //control !: AbstractControl;
  
  constructor(private cartService: CartService, private formBuilder : FormBuilder, private orderService: OrderService, private router: Router) {

    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  
  }

  ngOnInit(): void {
    
    this.checkoutForm = this.formBuilder.group({
      name : ['', Validators.required],
      address : ['', Validators.required],
      contact : ['', Validators.required],
    });
    //console.log(this.checkoutForm.value);
    
  }

  get fc()  {
    return this.checkoutForm.controls;
  }

  createOrder() {

    if(this.checkoutForm.invalid) return;

    this.order.name = this.fc['name'].value;
    this.order.address = this.fc['address'].value;
    this.order.contact = parseInt(this.fc['contact'].value);

    //console.log(this.order);
    this.orderService.create(this.order);
    this.router.navigateByUrl('/payment');

  }

}
