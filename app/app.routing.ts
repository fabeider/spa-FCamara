import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
 
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products.component';
import { AuthGuard } from './_guards/auth.guard';
 
const appRoutes: Routes = [
	{ path: '', redirectTo: '/products', pathMatch: 'full' },
  	{ path: 'products',     component: ProductsComponent, canActivate: [AuthGuard]  },
    { path: 'login', component: LoginComponent },
    { path: '', component: ProductsComponent, canActivate: [AuthGuard] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
 
