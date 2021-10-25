import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth : AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect() : void {
<<<<<<< HEAD
    this.auth.loginWithRedirect()
=======
    this.auth.loginWithRedirect();

    
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
  }

}
