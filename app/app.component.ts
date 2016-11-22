import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{product.name}} details!</h2>
  <div><label>id: </label>{{product.id}}</div>
  <div><label>name: </label>{{product.name}}</div>
  `
})

export class AppComponent {
  title = 'FCamara products';
  product: Product = {
    id: 1,
    name: 'Computer'
    details: 'Computer to compute';
  }

export class Product {
  id: number;
  name: string;
  details: string;
  }
