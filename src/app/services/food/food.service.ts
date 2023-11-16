import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;
  }
  getAll():Foods[]{
    return[
      {
        id:1,
        name: 'Blueberry',
        price:9,
        cookTime:'10-15',
        favorite:false,
        origins:['Italy'],
        star:4.0,
        imageUrl:'/assets/food1.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:2,
        name: 'Butterscotch',
        price:6,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4.0,
        imageUrl:'/assets/food2.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:3,
        name: 'Chocolate',
        price:7,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4.0,
        imageUrl:'/assets/food3.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:4,
        name: 'Oreo Icecream',
        price:10,
        cookTime:'10-15',
        favorite:false,
        origins:['Russian'],
        star:4.0,
        imageUrl:'/assets/food4.webp',
        tags:['icecream', 'Evening']
      },
      {
        id:5,
        name: 'IceCream with brownie',
        price:11.5,
        cookTime:'10-15',
        favorite:false,
        origins:['Germany'],
        star:4.0,
        imageUrl:'/assets/food5.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:6,
        name: 'Mango',
        price:6.5,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4.0,
        imageUrl:'/assets/food6.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:7,
        name: 'Rainbow',
        price:10.7,
        cookTime:'10-15',
        favorite:false,
        origins:['Italy'],
        star:4.0,
        imageUrl:'/assets/food7.jpg',
        tags:['icecream', 'Evening']
      },
      {
        id:8,
        name: 'vanilla',
        price:9,
        cookTime:'10-15',
        favorite:false,
        origins:['Indian'],
        star:4.0,
        imageUrl:'/assets/food8.jpg',
        tags:['icecream', 'Evening']
      }
      
    ];
  }
}

