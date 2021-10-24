import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../Servies/database.service';

@Component({
  selector: 'app-food-cards',
  templateUrl: './food-cards.component.html',
  styleUrls: ['./food-cards.component.css'],
})
export class FoodCardsComponent implements OnInit {
  data = [] as any;
  holder: object = {};
  message: any;

  constructor(private fetch: DatabaseService) {}
  ngOnInit(): void {
    // this.cardItems = [];
    this.fetch.fetch().subscribe((res) => {
      console.log(res);
      this.data = res;

      console.log('this is it', this.data);
    });
  }

  public cardItems: Object[] = [];
  injectCard(element: any) {
    this.cardItems.push(element);
    console.log('this card items', this.cardItems);
    //add card item to local storage (JSON.stringify to convert the JSON to readable object)
    localStorage.setItem('cardData', JSON.stringify(this.cardItems));
    console.log(this.holder);
  }
  inject(element: any) {
    this.holder = element;
    console.log(this.holder);
  }
  // sub(){
  //   if(this.holder.length){
  //     this.fetch.currentMessage.subscribe(message => this.message = message)
  //   }
  // }
}
