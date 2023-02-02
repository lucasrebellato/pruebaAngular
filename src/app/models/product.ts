export class Product {
    public id: number;
    public name: string;
    public price: number;
    public quantity: number;
    public image: string;
    public type : string;

    constructor(id : number, name : string, price : number, quantity : number, image : string, type : string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.type = type;
    }
}
