import { CardComponent } from './card/card.component';

import { BrowserModule } from '@angular/platform-browser';
import { AddFoodComponent } from './add-food-List/add-food.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AddFoodComponent, CardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [CardComponent],
  exports: [],
})
export class AdminModule {}
