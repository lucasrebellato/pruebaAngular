import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { userMessage } from 'src/app/models/userMessage';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public userMessage: userMessage;
  regExName : RegExp = /[a-zA-Z]+/;
  regExEmail : RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private ProductServices: ProductsService){
    
    this.userMessage = {
      name:'',
      surname:'',
      email:'',
      message:''
    };

  }

  async onSubmit(){
    const response = await this.ProductServices.addUserComment(this.userMessage);
    alert("Se han enviado sus comentarios, gracias!")
  }

}
