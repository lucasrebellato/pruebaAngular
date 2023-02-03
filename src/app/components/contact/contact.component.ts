import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public userMessage: any;
  regExName : string = "[a-zA-Z]+";
  regExEmail : string = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";

  constructor(){
    
    this.userMessage = {
      name:'',
      surname:'',
      email:'',
      message:''
    };

  }

  onSubmit(){
    alert("Formulario enviado correctamente");
  }

}
