import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/Cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart =new Cart();
  CartItem: any;
  addToCart(food:Foods) :void{
    let cartItem =this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, this.CartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodId)
  }
  changeQuantity(quantity:number, foodId:number){
    let cartItem = this.cart.items.find(item=> item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
