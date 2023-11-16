import { CartItem } from "./Cartitem";

export class Cart{
    items:CartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            if (typeof item.price === 'number') {
            totalPrice += item.price;
        } else {
            console.error('Invalid item price:', item.price);
    }
        });
        return totalPrice;
    }
}