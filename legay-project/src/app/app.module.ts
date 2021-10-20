import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AddFoodComponent } from './admin/add-food-List/add-food.component';
import { CardComponent } from './admin/card/card.component';
import { ButtonAddComponent } from './admin/button-add/button-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddFoodComponent,
    CardComponent,
    ButtonAddComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
