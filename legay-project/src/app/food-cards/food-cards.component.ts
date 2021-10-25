import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.css']
})
export class FoodCardsComponent implements OnInit {
data = [] as any
<<<<<<< HEAD
holder : any
message :any
=======
message :any
detailsinj : any
holder: object = {};

>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3

  constructor(private fetch:DatabaseService,public auth : AuthService) {   }
  ngOnInit(): void {
<<<<<<< HEAD
    this.fetch.fetch().subscribe(res =>{
      console.log(res)
      this.data = res

      console.log('this is it',this.data)
    })
  
  }
inject(element : any){
this.holder = element
console.log(this.holder)
}
sub(){
  if(this.holder.length){
    this.fetch.currentMessage.subscribe(message => this.message = message)
  }
}

=======
    // this.cardItems = [];
    this.fetch.fetch().subscribe((res) => {
      console.log(res);
      this.data = res;

      console.log('this is it',this.data)
    })
  this.sub()
  }

inject(element : any){
  this.fetch.emit(element)
this.holder = element
console.log(this.holder)
}

injectdetails(element : any){
  this.fetch.save(element)
this.detailsinj = element
console.log(this.detailsinj)
}

sub(){  
  this.fetch.on().subscribe(message => this.message = message)
}

subdetails(){  
  this.fetch.sub().subscribe(message => this.message = message)
}
public cardItems: Object[] = [];
  injectCard(element: any) {
    this.cardItems.push(element);
    console.log('this card items', this.cardItems);
    //add card item to local storage (JSON.stringify to convert the JSON to readable object)
    localStorage.setItem('cardData', JSON.stringify(this.cardItems));
    console.log(this.holder);
  }
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
}

