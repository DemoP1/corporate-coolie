import { inject, Injectable } from "@angular/core";
import { ProductApiService } from "../../services/product-api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as productActions from './product.action'
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffect {
    private api = inject(ProductApiService);
    action$ = inject(Actions);
    loadProducts$ = createEffect(() =>
        this.action$.pipe(
            ofType(productActions.loadProduct),
            //switchMap to call the API
            switchMap(() =>
                this.api.getProducts()
                    .pipe(
                        //if success, dispatch success action
                        map((products) =>
                            productActions.loadProductSuccess({ products })
                        ),
                        //if error, dispatch failure action
                        catchError((error) =>
                            of(productActions.loadProductFailure({ error: error.message }))
                        )
                    )
            )
        )
    );
}