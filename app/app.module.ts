import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
