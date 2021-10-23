import { CardComponent } from './card/card.component';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { AddFoodComponent } from "./add-food-List/add-food.component";
import { NgModule } from '@angular/core';



@NgModule({
    declarations: [
 AdminComponent,
 AddFoodComponent,
 CardComponent

    ],
    imports: [
      
    BrowserModule

     
    ],
    providers: [],
    bootstrap: [AdminComponent],
    exports: []
  })
  export class AdminModule {}
