import { Component } from '@angular/core';

@Component({
selector: 'my-app',
template: `
<h2>FCamara Products</h2>
<ul class="products">
  <li *ngFor="let product of products" (click)="onSelect(product)">
    <span class="badge">{{product.id}}</span> {{product.name}}
    <!-- each hero goes here -->
  </li>
</ul>  
`, 
styles: [`
.selected {
background-color: #CFD8DC !important;
color: white;
}
.products {
margin: 0 0 2em 0;
list-style-type: none;
padding: 0;
width: 15em;
}
.products li {
cursor: pointer;
position: relative;
left: 0;
background-color: #EEE;
margin: .5em;
padding: .3em 0;
height: 1.6em;
border-radius: 4px;
}
.products li.selected:hover {
background-color: #BBD8DC !important;
color: white;
}
.products li:hover {
color: #607D8B;
background-color: #DDD;
left: .1em;
}
.products .text {
position: relative;
top: -3px;
}
.products .badge {
display: inline-block;
font-size: small;
color: white;
padding: 0.8em 0.7em 0 0.7em;
background-color: #607D8B;
line-height: 1em;
position: relative;
left: -1px;
top: -4px;
height: 1.8em;
margin-right: .8em;
border-radius: 4px 0 0 4px;
}
`]
})

export class AppComponent {
title = 'FCamara products';
products = PRODUCTS;
}

export class Product {
id: number;
name: string;
}

const PRODUCTS: Product[] = [
{ id: 11, name: 'Bola' },
{ id: 12, name: 'Pasta de dente' },
{ id: 13, name: 'Coca-cola' },
{ id: 14, name: 'Café' },
{ id: 15, name: 'Manteiga' },
{ id: 16, name: 'Cerveja' },
{ id: 17, name: 'Tomate' },
{ id: 18, name: 'Celular' },
{ id: 19, name: 'Arroz' },
{ id: 20, name: 'Feijão' }
];









