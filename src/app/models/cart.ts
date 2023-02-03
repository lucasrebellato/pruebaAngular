import { Product } from "./product";

export class Cart {
    public products : Product[] = [];
    public quantity : number;    
    public price : number;

    constructor(item : Product, price : number, quantity : number) {
        this.products.push(item);
        this.price = price;
        this.quantity = quantity;
    }
}
