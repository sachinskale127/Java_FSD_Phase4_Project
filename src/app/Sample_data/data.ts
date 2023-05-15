import { Food } from "../Models/food";
import { Tag } from "../Models/tag";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Milk',
        price: 25,
        imageUrl: 'assets/foodItem1.jpg',
        tags: ['Veg'],
        company: ''
    },
    {
        id: '2',
        name: 'Bread',
        price: 20,
        imageUrl: 'assets/foodItem2.jpg',
        tags: ['Veg'],
        company: ''

    },
    {
        id: '3',
        name: 'Eggs',
        price: 10,
        imageUrl: 'assets/foodItem3.jpg',
        tags: ['Non-veg'],
        company: ''
    },
    {
        id: '4',
        name: 'Vegetables',
        price: 20,
        imageUrl: 'assets/foodItem4.jpg',
        tags: ['Veg'],
        company: ''
    },
    {
        id: '5',
        name: 'Chicken',
        price: 199,
        imageUrl: 'assets/foodItem5.webp',
        tags: ['Non-veg'],
        company: ''
    },
    {
        id: '6',
        name: 'Fish Meat',
        price: 300,
        imageUrl: 'assets/foodItem6.jpg',
        tags: ['Non-veg'],
        company: ''
    }
]

export const sample_tags: Tag[] = [

    {
        name: 'All',
        count: 6
    },
    {
        name: 'Veg',
        count: 3
    },
    {
        name: 'Non-veg',
        count: 3
    }
]
