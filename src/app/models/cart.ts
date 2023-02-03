import { Product } from "./product";

export class Cart {
    public product : Product;
    public quantity : number;    
    public price : number;

    constructor(item : Product, price : number, quantity : number) {
        this.product = item;
        this.price = price;
        this.quantity = quantity;
    }
}
