import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-box',
  templateUrl: './cart-box.component.html',
  styleUrls: ['./cart-box.component.css']
})
export class CartBoxComponent implements OnInit {

  @Input() cart: Cart[] = [];
  total: number = 0;
  itemOfCart = Cart;
  indexOfItem: number = 0;

  constructor() {
  }
  
  ngOnInit(): void {
    console.log(this.cart);
    
    this.cart.forEach(item => {
      this.total += item.quantity * item.price;
    })


  }

  outOfCart(item : Product){
    this.cart.forEach(itemInCart => {

      if (itemInCart.product.id == item.id) {
        this.indexOfItem = this.cart.indexOf(itemInCart);
      }
    })

    this.cart[this.indexOfItem].quantity--;
    
    this.cart[this.indexOfItem].quantity <= 0 ? this.cart.splice(this.indexOfItem,1) : "";

  }




}
