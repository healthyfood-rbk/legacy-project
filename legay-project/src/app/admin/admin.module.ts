
import { BrowserModule } from '@angular/platform-browser';
import { AddFoodComponent } from './add-food-List/add-food.component';
import { NgModule } from '@angular/core';

import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent,AddFoodComponent ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AdminComponent],
  exports: [],
})
export class AdminComponent {}
