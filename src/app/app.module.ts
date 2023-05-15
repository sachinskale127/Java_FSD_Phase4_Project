import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/Partials/header/header.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { TagsComponent } from './Components/Partials/tags/tags.component';
import { SearchComponent } from './Components/Partials/search/search.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { CheckoutComponent } from './Components/Pages/checkout/checkout.component';
import { ListComponent } from './Components/Partials/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from './Components/Partials/title/title.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';
import { TextInputComponent } from './Components/Partials/text-input/text-input.component';
import { InputValidationComponent } from './Components/Partials/input-validation/input-validation.component';
import { InputContainerComponent } from './Components/Partials/input-container/input-container.component';
import { NotFoundComponent } from './Components/Partials/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TagsComponent,
    SearchComponent,
    FoodComponent,
    CartComponent,
    CheckoutComponent,
    ListComponent,
    TitleComponent,
    PaymentComponent,
    TextInputComponent,
    InputValidationComponent,
    InputContainerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
