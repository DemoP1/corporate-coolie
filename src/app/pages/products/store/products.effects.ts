import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductApiService } from "../../../shared/services/product-api.service";
import { productsActions } from "./products.action";
import { catchError, map, of, switchMap } from "rxjs";

export const productEffect = createEffect(
    (action$ = inject(Actions), productApi = inject(ProductApiService)) => {

        return action$.pipe(
            ofType(productsActions.load),
            switchMap(() => {
                return productApi.getProducts().pipe(
                    map((products) => productsActions.loadSuccess({ products })),
                    catchError((error)=> of(productsActions.loadFailure({error:error.message})))
                )
            })
        )
    },
    {
        functional:true
    }
)