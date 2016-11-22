import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductService {
  getProducts(): Product[]{
    return PRODUCTS;
  }
}
