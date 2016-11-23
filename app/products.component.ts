import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from './_models/product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'my-products',
  templateUrl: 'products.component.html',
  styleUrls: [ 'products.component.css' ]
})

export class ProductsComponent implements OnInit{
  errorMessage: string;
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

