import { Component, Input, OnInit } from '@angular/core';

import { Order } from 'src/app/Models/order';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  order !: Order;

  constructor() { }

  ngOnInit(): void {
  }

}
