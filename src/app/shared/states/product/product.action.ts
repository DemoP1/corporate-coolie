import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../models/products.interface';

export const loadProduct = createAction('[product Component] Load Products');
export const loadProductSuccess = createAction('[product Effect] Load Product Success', props<{ products: IProduct[] }>());
export const loadProductFailure = createAction('[product Effect] Load Product Failure', props<{ error: string }>());

