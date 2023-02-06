import { Product } from "./product";

export class Cart {
    public product: Product;
    public quantity: number;
    public price: number;

    constructor(item: Product) {
        this.product = item;
        this.price = item.price;
        this.quantity = 1;
    }
}
