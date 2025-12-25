import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../models/products.interface";
import * as cartActions from "./cart.action";

export interface CartState {
    products: IProduct[];
    totalPrice: number;
    totalItems:number;
}

export const initialCartState: CartState = {
    products: [],
    totalPrice: 0,
    totalItems:0
};

export function calculateTotalPrice (products: IProduct[]): number {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
};

export function calculateTotalItems(products: IProduct[]): number {
    return products.reduce((total, product) => total + product.quantity, 0);
}

export const cartReducer = createReducer(
    initialCartState,
    // Adding product to cart
    on(cartActions.addToCart, (state, { product }) => ({
        ...state,
        products: [...state.products, product],
        totalPrice: calculateTotalPrice([...state.products, product]),
        totalItems: calculateTotalItems([...state.products, product])
    })),
    // Incrementing product quantity
    on(cartActions.incrementProduct, (state, { productId }) => {
        const updatedProducts = state.products.map(product => product.id === productId
            ? { ...product, quantity: product.quantity + 1 } : product);
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calculateTotalPrice(updatedProducts),
            totalItems: calculateTotalItems(updatedProducts)
        };
    }),
    // Decrementing product quantity
    on(cartActions.decrementProduct, (state, { productId }) => {
        const updatedProducts = state.products.map(product => product.id === productId
            ? { ...product, quantity: product.quantity - 1 } : product);
            return {
                ...state,
                products: updatedProducts,
                totalPrice: calculateTotalPrice(updatedProducts),
                totalItems: calculateTotalItems(updatedProducts)
            };
    }),
    on(cartActions.removeProduct, (state, { productId }) => {
        const updatedProducts = state.products.filter(product => product.id !== productId);
        return {
            ...state,
            products: updatedProducts,
            totalPrice: calculateTotalPrice(updatedProducts),
            totalItems: calculateTotalItems(updatedProducts)
        };
    })

);