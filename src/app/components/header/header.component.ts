import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activePage: string = "index";

  constructor(){

  }

  onChange(page:string) {
    this.activePage = page
    console.log(this.activePage);
  }


}
