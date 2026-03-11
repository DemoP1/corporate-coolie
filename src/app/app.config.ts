import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { AuthFeature } from './shared/store/auth.feature';
import * as authEffects from './shared/store/auth.effect';
import {provideNgToast} from 'ng-angular-popup'

export const API_URL = new InjectionToken<string>("API_URL");

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore(),
    provideEffects(authEffects),
  
    provideState(AuthFeature),
    {
      provide: API_URL,
      useValue: "https://fakestoreapi.com"
    },
      provideNgToast({
        duration:4000,
        position:'toaster-top-right',
        width:250
      }),
  ]
};
