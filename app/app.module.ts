import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports:      [
    BrowserModule, 
    HttpModule
    ],
  declarations: [ AppComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
