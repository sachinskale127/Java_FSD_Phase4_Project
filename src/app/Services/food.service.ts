import { Injectable } from '@angular/core';

import { Food } from '../Models/food';
import { Tag } from '../Models/tag';
import { sample_foods, sample_tags } from '../Sample_data/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]  {
    return sample_foods;
  }

  getAllTags(): Tag[]  {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string) : Food[]  {
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  
  getAllFoodsBySearchTerm(searchTerm: string)  {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getFoodById(foodId: string): Food  {
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
  
}
