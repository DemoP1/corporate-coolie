import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthAPI } from "../services/auth-api";
import { authActions } from "./auth.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { MyStorage } from "../services/storage";
import { extractToken } from "../utils/extractToken";
import { NgToastService } from "ng-angular-popup";

export const loginEffect = createEffect(
    (
        actions$ = inject(Actions),
        authApi = inject(AuthAPI),
        router = inject(Router),
         storage= inject(MyStorage),
         ngToast=inject(NgToastService)
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap((loginRequest) => {
                return authApi.login(loginRequest).pipe(
                    map((response) => {
                        ngToast.success('Login Successful', 'SUCCESS')
                        router.navigateByUrl('/products');
                        storage.setItem('ngrxstore_token',response.token)
                        const payload=extractToken(response.token)

                       if(payload){
                        return authActions.loginSuccess({token:response.token,userId:payload.sub})
                       }
                       return authActions.loginSuccess({token:response.token, userId:null})
                    }),
                    catchError((error) => {
                        ngToast.danger('Login Failed!', 'FAILED')
                        return of(authActions.loginFailure({ error: error.message || 'An error occurred during login.' }));
                    })
                )
            })
        )

    },
    {
        functional: true
    }
)

export const registerEffect = createEffect(
    (
        actions$ = inject(Actions),
        authApi = inject(AuthAPI),
        router = inject(Router),
        ngToast=inject(NgToastService)
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap((registerRequest) => {
                return authApi.register(registerRequest).pipe(
                    switchMap((response) => {
                        ngToast.success("Register Sccessful!", "SUCCESS")
                        router.navigateByUrl('/login');
                        return of(authActions.registerSuccess());
                    }),
                    catchError((error) => {
                        ngToast.success("Register Failed!!", "FAILED")
                        return of(authActions.registerFailure({ error: error.message || 'An error occurred during registration.' }));
                    })
                )
            })

        )
    },
    {
        functional: true
    }
)