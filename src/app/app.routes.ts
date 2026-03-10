import { Routes } from '@angular/router';
import { LoginPage } from './pages/login/login';
import { Cart } from './pages/cart/cart';
import { Products } from './pages/products/products';
import { Profile } from './pages/profile/profile';
import { Register } from './pages/register/register';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(m => LoginPage)
    },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then(m => Register)
    },
    {
        path: '',
        canActivate:[],
        loadComponent: () => import('./pages/main-layout').then(m => m.MainLayout),
        children: [
            {
                path: 'products',
                loadComponent: () => import('./pages/products/products').then(m => Products)
            },
            {
                path: "profile",
                loadComponent: () => import('./pages/profile/profile').then(m => Profile)
            },
            {
                path: "cart",
                loadComponent: () => import('./pages/cart/cart').then(m => Cart)
            }
        ]
    },

];
