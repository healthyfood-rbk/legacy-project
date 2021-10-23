import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.css']
})
export class FoodCardsComponent implements OnInit {
data = [] as any
verif = false
holder :any
  constructor(private fetch:DatabaseService) {   }
  ngOnInit(): void {
    this.fetch.fetch().subscribe(res =>{
      console.log(res)
      this.data = res

      console.log('this is it',this.data)
    })
  
  }
in(e:any){
  this.verif = true
  this.holder = e
}
out (){
  this.verif = false
}

}
