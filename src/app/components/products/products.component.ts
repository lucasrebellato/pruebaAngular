import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  coffees : Product[] = [];
  desserts : Product[] = [];

  constructor(private productsService : ProductsService) {

  }
  ngOnInit(){
    
    this.productsService.getProducts().subscribe(products => {
        products.forEach(product => {
        if(product.type=="dessert") this.desserts.push(product);
        else this.coffees.push(product);
      })
    })
  
  }



}
