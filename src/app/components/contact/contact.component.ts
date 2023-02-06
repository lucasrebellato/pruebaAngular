import { Component } from '@angular/core';
import { userMessage } from 'src/app/models/userMessage';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public userMessage: userMessage;
  regExName : RegExp = /[a-zA-Z]+/;
  regExEmail : RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private userService: userService){
    
    this.userMessage = {
      name:'',
      surname:'',
      email:'',
      message:''
    };

  }

  async onSubmit(){
    const response = await this.userService.addUserComment(this.userMessage);
    alert("Se han enviado sus comentarios, gracias!");
  }

}
