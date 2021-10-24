import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
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
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LogoutButtonComponent } from './auth-components/logout-button/logout-button.component';
import { FiltredDataComponent } from './filtred-data/filtred-data.component';
import { FilterPipe } from './Pipes/filter.pipe';




// import {UpdateComponent} from './admin/update/update.component'
// import {FooterOneComponent} from './footer/footer.component'
// console.log(document.cookie.length)

    
    
    import { AppRoutingModule, routingComponents } from './app-routing.module';
    // import { AdminModule } from './admin/admin.module';
    import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
    
    @NgModule({
      declarations: [
        AdminComponent,
        AppComponent,
        AddFoodComponent,
        ButtonAddComponent,
        // routingComponents,
        NavbarComponent,
        CardComponent,
    FoodCardsComponent,
    PaymentComponent,
    AdminSignupComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    FiltredDataComponent,
    FilterPipe,
    AddToCartComponent,
    // UpdateComponent,
    // FooterOneComponent
  ],
  imports: [
    // AdminModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "" , component:FoodCardsComponent},
      {path : "details" , component:FiltredDataComponent},
      {path : "details" , component:FiltredDataComponent},
      {path : "admin" , component:AdminComponent},
      {path : "addfood", component: AddFoodComponent},
      { path: 'cart', component: AddToCartComponent },
      // {path : "updatefood", component: UpdateComponent},
    // AppRoutingModule,
    ]),
    AuthModule.forRoot({
      ...env.auth,
    })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
