import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  data = [] as any
  valueholder : any
  constructor(public auth : AuthService,private service : DatabaseService) { }

  ngOnInit(): void {
    this.service.fetch().subscribe(res =>{
      console.log(res)
      this.data = res

    })
  }
  
    inject(element : any){
      this.service.emit(element)
  
    }

  onChange(e:any){
this.valueholder =  e.target.value 
console.log(this.valueholder)
this.inject(this.valueholder)

  }
  check(){
    console.log(this.valueholder)
    
    if(this.valueholder.length){
  
      this.service.lifter = this.data.filter((e : any)=>{
        return e.name === this.valueholder
      })
      console.log('navbar',this.service.lifter)
    }
    else{
      console.log("notworking");
      
    }
  }
}
