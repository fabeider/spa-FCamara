import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-product-detail',
  template: `
  <div *ngIf="selectedProduct">
    <h2>{{selectedProduct.name}} details!</h2>
    <div><label>name: </label>{{selectedProduct.name}}</div>
    <div>
      <label>price: </label>
      $ {{selectedProduct.price}}
    </div>
  </div>
`
})

export class ProductDetailComponent {
  @Input()
  product: Product;
}
