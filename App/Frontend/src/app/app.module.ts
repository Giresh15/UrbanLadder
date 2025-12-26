import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductDetailsListComponent } from './components/product-details-list/product-details-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SearchComponent } from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShopnowComponent } from './components/shopnow/shopnow.component';
import { ProductUserListComponent } from './components/addtocart/product-user-list.component';
import { FurnitureformComponent } from './components/furnitureform/furnitureform.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { PaymentformComponent } from './components/paymentform/paymentform.component';
import { SucessfulComponent } from './components/sucessful/sucessful.component';
import { ProductcategeoryComponent } from './components/productcategeory/productcategeory.component';


const routes :Routes = [
  {path : "",component:WelcomeComponent},
  {path : 'shopnow',component:ShopnowComponent},
  {path : 'furnitureform',component:FurnitureformComponent},
  {path : 'editdetails/:pId',component:FurnitureformComponent},
  {path : 'products',component:ProductDetailsListComponent },
  {path : 'register',component:RegisterComponent},
  {path : 'login',component:LoginComponent},
  {path : 'search/:pname',component:CartListComponent},
  {path : 'carts',component:CartListComponent},
  {path : 'paymentform',component:PaymentformComponent},
  {path : 'addtocart',component:ProductUserListComponent},
  {path : 'sucessful',component:SucessfulComponent},
  {path : 'categeory/:pcId',component:CartListComponent}



]
@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsListComponent,
    WelcomeComponent,
    SearchComponent,
    ShopnowComponent,
    ProductUserListComponent,
    FurnitureformComponent,
    LoginComponent,
    RegisterComponent,
    CartListComponent,
    PaymentformComponent,
    SucessfulComponent,
    ProductcategeoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
