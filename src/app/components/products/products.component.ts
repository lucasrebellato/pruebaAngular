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
  total : number = 0;

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


}
