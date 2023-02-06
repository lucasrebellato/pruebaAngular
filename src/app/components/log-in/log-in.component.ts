import { Component } from '@angular/core';
import { user } from 'src/app/models/user';
import { userService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  logInUser: user;

  constructor(private userService: userService, private router: Router) {
    this.logInUser = {
      email: '',
      password: ''
    }
  }


  onSubmit() {
    this.userService.login(this.logInUser)
      .then(
        response => {
          this.router.navigate(['/home']);
          window.localStorage.setItem('emailForSignIn', JSON.stringify(response.user.email));
          window.location.reload()
        }
      )
      .catch(
        error => {
          alert(error)
          console.log(this.logInUser)
        })
  }

  onClick() {
    this.userService.loginWithGoogle()
      .then(response => {
        window.localStorage.setItem('emailForSignIn', JSON.stringify(response.user.email));
        window.location.reload()
        this.router.navigate(['/home']);

      })
      .catch(error => console.log(error))
  }
}
