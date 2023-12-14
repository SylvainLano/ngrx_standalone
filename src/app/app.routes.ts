import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'phone-details/:id', loadComponent: () => import('./phone-details/phone-details.component').then(m => m.PhoneDetailsComponent) },
    { path: 'cart',component:CartComponent }
];
