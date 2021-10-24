import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.css']
})
export class FoodCardsComponent implements OnInit {
data = [] as any
holder : any
message :any
detailsinj : any

  constructor(private fetch:DatabaseService) {   }
  ngOnInit(): void {
    this.fetch.fetch().subscribe(res =>{
      console.log(res)
      this.data = res

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

}
