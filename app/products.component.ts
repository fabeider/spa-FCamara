import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
selector: 'my-products',
templateUrl: './app/products.component.html',
styleUrls: [ './app/products.component.css' ]
})

export class ProductsComponent {
  errorMessage: string;
  title = 'FCamara products';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService){}

  getProducts(): void {
    this.productService.getProducts().subscribe(
                     products => this.products = products,
                     error =>  this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}

