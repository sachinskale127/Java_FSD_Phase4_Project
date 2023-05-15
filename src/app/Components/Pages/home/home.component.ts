import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Observable } from 'rxjs';

import { Food } from 'src/app/Models/food';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tagid']);
      else
        this.foods = foodService.getAll();
    });

  }

  ngOnInit(): void {
  }

}
