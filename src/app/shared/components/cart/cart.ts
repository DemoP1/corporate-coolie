import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { AppState } from '../../states/app.state';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.interface';
import { decrementProduct, incrementProduct, removeProduct } from '../../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartItems$:Observable<IProduct[]>
   totalPrice$: Observable<number> 
  
  constructor(private store: Store<AppState>) {
    this.cartItems$ = this.store.select(selectCartProducts);
    this.totalPrice$ = this.store.select(state => state.cart.totalPrice);
  }
  
  removeItem(productId: number) {
   this.store.dispatch(removeProduct({productId}));
  }
  
  incrementQuantity(productId: number) {
   this.store.dispatch(incrementProduct({productId}));
  }

  decrementQuantity(productId: number) {
       this.store.dispatch(decrementProduct({productId}));

  }
  

}
