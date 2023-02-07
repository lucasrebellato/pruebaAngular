import { Component, OnInit } from '@angular/core';
import { userService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  templateUrl: './header-login.component.html',
  styleUrls: ['./header-login.component.css']
})
export class HeaderLoginComponent implements OnInit {
 
  
  constructor(private userService: userService, private router : Router){}

  values : string = '';

  ngOnInit(): void {
    const possible : string |null = localStorage.getItem("emailForSignIn")
    if(!possible) return
    this.values = possible;
    console.log(this.values);
  }

  logOut(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/home']);
      this.values = ' ';
    })
    .catch(error => console.log(error));
  }
  
 

}
