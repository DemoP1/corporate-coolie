import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IProduct } from "../../../shared/models/products.interface"; // Make sure this path is correct

export const  productsActions=createActionGroup({
    source:'Products',
    events:{
        load:emptyProps(),
        loadSuccess:props<{ products: IProduct[] }>(),
        loadFailure:props<{error:string}>()
    }
})