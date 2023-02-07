import { Component, Input} from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {

  @Input() items: Product[] = [];
  @Input() cart: Cart[] = [];
  @Input() total : number = 0;

  constructor() {
  }

  addToCart(item: Product) {
 
    let itemExists = this.cart.find(x => x.product.id === item.id);
    itemExists ? itemExists.quantity++ : this.cart.push(new Cart(item));
    this.total+=item.price;
    console.log(this.total)
    
  }


}
