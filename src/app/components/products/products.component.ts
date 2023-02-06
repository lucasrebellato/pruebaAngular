import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  coffees: Product[] = [];
  desserts: Product[] = [];
  cart: Cart[] = [];
  // isInCart: Boolean = false;
  // itemOfCart = Cart;
  // indexOfItem: number = 0;

  constructor(private productsService: ProductsService) {
  }


  ngOnInit() {

    this.productsService.getProducts().subscribe(products => {
      products.forEach(product => {
        if (product.type == "dessert") this.desserts.push(product);
        else this.coffees.push(product);
      })
    })

  }

  // addToCart(item: Product) {

  //   this.cart.forEach(itemInCart => {

  //     if (itemInCart.product.id == item.id) {
  //       this.isInCart = true;
  //       this.indexOfItem = this.cart.indexOf(itemInCart);
  //     }
  //   })

  //     this.isInCart ? this.cart[this.indexOfItem].quantity++ : this.cart.push(new Cart(item));
    
  //   }




}
