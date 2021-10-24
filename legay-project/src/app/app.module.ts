import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';



import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodCardsComponent } from './food-cards/food-cards.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminSignupComponent } from './auth-components/admin-signup/admin-signup.component';

import { LoginButtonComponent } from './auth-components/login-button/login-button.component';
import {AuthModule} from '@auth0/auth0-angular'
import {environment as env } from '../environments/environment';
import { LogoutButtonComponent } from './auth-components/logout-button/logout-button.component';
import { FiltredDataComponent } from './filtred-data/filtred-data.component';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
 
    AppComponent,  
    routingComponents,
    NavbarComponent,
    FoodCardsComponent,
    PaymentComponent,
    AdminSignupComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    FiltredDataComponent,
  ],
  imports: [
    // AdminModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule,

    RouterModule.forRoot([
      {path : "" , component:FoodCardsComponent},
      {path : "details" , component:FiltredDataComponent}
      // {path : "**" , component:},
      // {path : "details" , component:FiltredDataComponent},

    ]),

    AuthModule.forRoot({
      ...env.auth,
    }),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
