import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<Product>;

  constructor() {
  this.products = [
  new Product(1,"Mocha",200, 1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMocha%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "coffee"),
  new Product(2,"Latte",150, 1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FLatte%20Macchiato%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "coffee"),
  new Product(3,"Caramel",130, 1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCaramel%20Macchiato%20425x425%20sin%20fondo.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "coffee"),
  new Product(4,"Muffin",140, 1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FMuffin-Choc-Chips-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "dessert"),
  new Product(5,"Croissant", 130 ,1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FCroissant-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "dessert"),
  new Product(6,"Donut",80, 1,"https://djftrby1k8irl.cloudfront.net/s3fs-public/2022-03%2FDonut-Rellena-425-x-425.png?auto=format,compress&q=70&crop=focalpoint&ar=1:1.0&w=180&fit=crop", "dessert"),
   ]
  }
  ngOnInit(){
    console.log(this.products);
  }



}
