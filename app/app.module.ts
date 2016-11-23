import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { ProductDetailComponent } from './product-detail.component';
import { AppComponent }   from './app.component';
import { ProductsComponent } from './products.component';
import { ProductService }         from './product.service';
import { AppRoutingModule }        from './app.routing';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports:      [
    BrowserModule, 
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent, 
    LoginComponent,
    ProductDetailComponent,
    ProductsComponent],
  providers: [
    AuthGuard,
    AuthenticationService,
    ProductService,
    AppRoutingModule
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
