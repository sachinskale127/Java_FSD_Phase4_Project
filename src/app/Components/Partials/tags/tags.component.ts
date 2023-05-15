import { Component, OnInit } from '@angular/core';

import { Tag } from 'src/app/Models/tag';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?: Tag[];
  
  constructor(private foodService: FoodService) {

    this.tags = foodService.getAllTags();
    
  }

  ngOnInit(): void {
  }

}
