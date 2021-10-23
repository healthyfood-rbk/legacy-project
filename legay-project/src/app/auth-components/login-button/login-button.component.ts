import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  constructor(public auth : AuthService , private router :Router ) { }

  ngOnInit(): void {
  }

  loginWithRedirect() : void {
    this.auth.loginWithRedirect();
    this.router.navigateByUrl('/admin');

    
  }

}
