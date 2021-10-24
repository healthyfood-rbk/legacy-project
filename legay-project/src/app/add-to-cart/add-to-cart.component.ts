import { Component, OnInit } from '@angular/core';
import { CardModel } from '../model/card.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  constructor() {}
  public cardList: any[] = [];
  //Defined new type for the cards named CardModel
  public cardItems: CardModel[] = [];
  public Total = 0;
  public displayCards: boolean = true;

  ngOnInit(): void {
    //Get the card items from the localstorage
    this.cardList.push(localStorage.getItem('cardData'));
    this.cardItems = JSON.parse(this.cardList[0]);
    console.log('The card List ...', this.cardItems);
    this.calculateTotal();
  }

  //Calculate the total price from each card item in the localstorage data list
  calculateTotal() {
    if (this.cardItems) {
      for (let i = 0; i < this.cardItems.length; i++) {
        let price = parseInt(this.cardItems[i].price.slice(0, -3));
        this.Total += price;
      }
    }
  }
  removeItems() {
    this.displayCards = false;
    localStorage.removeItem('cardData');
  }
}
