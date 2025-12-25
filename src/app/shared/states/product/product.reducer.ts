import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";
import * as productActions from './product.action'

export interface ProductState {
    products: IProduct[];
    error: string | null;
}

export const initialProductState: ProductState = {
    products: [],
    error: null
};

export const ProductReducer = createReducer(
    initialProductState,
    on(productActions.loadProductSuccess, (state, { products }) => ({
        ...state,
        products: products,
    })),
    on(productActions.loadProductFailure, (state, { error }) => ({
        ...state,
        error: error
    }))
);
