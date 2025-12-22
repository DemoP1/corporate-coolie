import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'products',
        pathMatch: 'full'
        
    },
    {
        path:"products",
        loadComponent:()=> import('./shared/components/products/products').then((a) => a.Products)
    },
    {
        path:"cart",
        loadComponent:()=> import('./shared/components/cart/cart').then((a) => a.Cart)
    }
];
