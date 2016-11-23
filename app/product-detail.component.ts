import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-product-detail',
  template: `
  <div *ngIf="product">
    <h2>{{product.name}} details!</h2>
    <div><label>name: </label>{{product.name}}</div>
    <div>
      <label>price: </label>
      $ {{product.price}}
    </div>
  </div>
`
})

export class ProductDetailComponent {
  @Input()
  product: Product;
}
