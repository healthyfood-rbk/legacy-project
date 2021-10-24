import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path : '',component : AppComponent  },
  { path: 'admin', component: AdminComponent },
  { path: 'cart', component: AddToCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [AppComponent, AdminComponent];
