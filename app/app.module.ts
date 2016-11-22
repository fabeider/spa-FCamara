import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports:      [
    BrowserModule, 
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [ AppComponent, ProductDetailComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
