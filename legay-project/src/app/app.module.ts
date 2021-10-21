import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { AddFoodComponent } from './admin/add-food-List/add-food.component';
import { CardComponent } from './admin/card/card.component';
import { ButtonAddComponent } from './admin/button-add/button-add.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodCardsComponent } from './food-cards/food-cards.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminSignupComponent } from './auth-components/admin-signup/admin-signup.component';

import { LoginButtonComponent } from './auth-components/login-button/login-button.component';
import {AuthModule} from '@auth0/auth0-angular'
import {environment as env } from '../environments/environment';
import { LogoutButtonComponent } from './auth-components/logout-button/logout-button.component';


@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    AddFoodComponent,
    CardComponent,
    ButtonAddComponent,

    NavbarComponent,
    FoodCardsComponent,
    PaymentComponent,
    AdminSignupComponent,
    LoginButtonComponent,
    LogoutButtonComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    AuthModule.forRoot({
      ...env.auth,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
