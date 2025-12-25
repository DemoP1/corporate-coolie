import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";


export const selectProductFeature = createFeatureSelector<ProductState>('products');
export const selectAllProducts = createSelector(
    selectProductFeature,
    (state) => state.products
)

export const selectAllProductError = createSelector(
    selectProductFeature,
    (state) => state.error
)