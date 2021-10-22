import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public auth : AuthService,private service : DatabaseService) { }

  ngOnInit(): void {
  }
  onChange(e:any){
this.service.lifter =  e.target.value 
console.log(this.service.lifter)
  }

}
