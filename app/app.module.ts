import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { ProductDetailComponent } from './product-detail.component';
import { AppComponent }   from './app.component';
import { ProductsComponent } from './products.component';
import { ProductService }         from './product.service';


@NgModule({
  imports:      [
    BrowserModule, 
    HttpModule
    ],
  declarations: [ 
  	AppComponent, 
  	ProductDetailComponent,
  	ProductsComponent],
  providers: [
    ProductService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
