import { Component, Input, OnInit } from '@angular/core';
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

  isInCart: Boolean = false;
  itemOfCart = Cart;
  indexOfItem: number = 0;

  constructor() {
  }

  addToCart(item: Product) {
    console.log(item)

    this.cart.forEach(itemInCart => {

      if (itemInCart.product.id == item.id) {
        this.isInCart = true;
        this.indexOfItem = this.cart.indexOf(itemInCart);
      }
    })

    this.isInCart ? this.cart[this.indexOfItem].quantity++ : this.cart.push(new Cart(item));

  }




}
