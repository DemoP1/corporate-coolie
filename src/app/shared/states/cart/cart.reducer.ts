import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";
import * as cartActions from "./cart.action";

export interface CartState {
    products: IProduct[];
    totalPrice?: number;
}

export const initialCartState: CartState = {
    products: [],
};

export const cartReducer = createReducer(
    initialCartState,
    // Adding product to cart
    on(cartActions.addToCart, (state, { product }) => ({
        ...state,
        products: [...state.products, product],
    })),
    // Incrementing product quantity
    on(cartActions.incrementProduct, (state, { productId }) => ({
        ...state,
        products: state.products.map(product => product.id === productId
            ? { ...product, quantity: product.quantity + 1 } : product),
    })),
    // Decrementing product quantity
    on(cartActions.decrementProduct, (state, { productId }) => ({
        ...state,
        products: state.products.map(product => product.id === productId
            ? { ...product, quantity: product.quantity - 1 } : product),
    })),
    on(cartActions.removeProduct, (state, { productId }) => ({
        ...state,
        products: state.products.filter(product => product.id !== productId),
    }))

);