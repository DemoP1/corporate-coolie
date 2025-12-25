import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/products.interface';

export const addToCart = createAction('[Cart Component] Add to Cart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart Component] Increment', props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] Decrement', props<{ productId: number }>());
export const removeProduct = createAction('[Cart Component] Remove Product', props<{ productId: number }>());