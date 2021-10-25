import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddFoodComponent } from './admin/add-food-List/add-food.component';
import { CardComponent } from './admin/card/card.component';
<<<<<<< HEAD
=======
import { ButtonAddComponent } from './admin/button-add/button-add.component';

>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
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
<<<<<<< HEAD
import {UpdateComponent} from './admin/update/update.component'
import {FooterOneComponent} from './footer/footer.component'
console.log(document.cookie.length)
@NgModule({
  declarations: [
    AppComponent,

    AdminComponent,
    AddFoodComponent,
    CardComponent,
   

    NavbarComponent,
=======
import { FilterPipe } from './Pipes/filter.pipe';




// import {UpdateComponent} from './admin/update/update.component'
// import {FooterOneComponent} from './footer/footer.component'
// console.log(document.cookie.length)

    
    
    import { AppRoutingModule, routingComponents } from './app-routing.module';
    // import { AdminModule } from './admin/admin.module';
    import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { LoadingorderComponent } from './loadingorder/loadingorder.component';
    
    @NgModule({
      declarations: [
        AdminComponent,
        AppComponent,
        AddFoodComponent,
        ButtonAddComponent,
        // routingComponents,
        NavbarComponent,
        CardComponent,
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
    FoodCardsComponent,
    PaymentComponent,
    AdminSignupComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    FiltredDataComponent,
<<<<<<< HEAD
    UpdateComponent,
    FooterOneComponent
=======
    FilterPipe,
    AddToCartComponent,
    LoadingorderComponent,
    // UpdateComponent,
    // FooterOneComponent
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : "" , component:FoodCardsComponent},
      {path : "details" , component:FiltredDataComponent},
<<<<<<< HEAD
      {path : "admin" , component:AdminComponent},
      {path : "addfood", component: AddFoodComponent},
      {path : "updatefood", component: UpdateComponent},

      // {path : "**" , component:},
      // {path : "details" , component:FiltredDataComponent},

=======
      {path : "details" , component:FiltredDataComponent},
      {path : "admin" , component:AdminComponent},
      {path : "addfood", component: AddFoodComponent},
      { path: 'cart', component: AddToCartComponent },
      {path : "loading",component : LoadingorderComponent},
      // {path : "updatefood", component: UpdateComponent},
    // AppRoutingModule,
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
    ]),
    AuthModule.forRoot({
      ...env.auth,
    })
<<<<<<< HEAD

  ],
=======
],
>>>>>>> a8c531dde03b31582b7a848b1b9813d3a01beec3
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
