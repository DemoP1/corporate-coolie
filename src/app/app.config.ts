import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer } from './shared/states/cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffect } from './shared/states/product/product.effect';
import { ProductReducer } from './shared/states/product/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({ auth: cartReducer }),
    provideState({name:'cart',reducer:cartReducer}),
    provideState({name:'products',reducer:ProductReducer}),
    provideEffects(ProductEffect),
]
};
