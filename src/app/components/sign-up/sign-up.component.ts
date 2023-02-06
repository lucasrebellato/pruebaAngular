import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public newUser: user;
  regExEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  constructor(private userService: userService, private router: Router) {

    this.newUser = {
      email: '',
      password: ''
    };
  }


  onSubmit() {
    this.userService.register(this.newUser)
      .then(response => {
        alert("Usuario creado correctamente.");
        this.router.navigate(['/signIn'])
      })
      .catch(error =>alert(error))
  }


}
