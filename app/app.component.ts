import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<my-products></my-products>
	<router-outlet></router-outlet>
	`
})

export class AppComponent {
	title = 'FCamara Products';
}