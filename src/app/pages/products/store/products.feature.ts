import { createFeature, createReducer, on, State } from "@ngrx/store";
import { IProduct } from "../../../shared/models/products.interface"
import { productsActions } from "./products.action";

export type ProductState={
    products:IProduct[];
    error:string | null;
    loading:boolean;
}

export const initialProductState:ProductState ={
    products:[],
    error:null,
    loading:false
};

export const productFeature=createFeature({
    name:'products',
    reducer:createReducer(
        initialProductState,
        on(productsActions.load, (state)=>({
            ...state,
            loading:true,
        })),
    on(productsActions.loadSuccess,(state,{products})=>({
        ...state,
        products,
        loading:false,
        error:null
    })),
    on(productsActions.loadFailure,(state,{error})=>({
        ...state,
        error,
        loading:false,
    }))
)
})