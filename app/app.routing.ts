import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/auth.guard';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: AppComponent, canActivate: [AuthGuard] },
 
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);
