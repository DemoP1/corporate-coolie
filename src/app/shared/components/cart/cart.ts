import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal, totalItems } from '../../states/cart/cart.selector';
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
  store = inject(Store<AppState>);

  cartItems$ = this.store.select(selectCartProducts) as Observable<IProduct[]>;
  totalPrice$ = this.store.select(selectTotal) as Observable<number>;
  cartItemsCount$ = this.store.select(totalItems) as Observable<number>;

  removeItem(productId: number) {
    this.store.dispatch(removeProduct({ productId }));
  }

  incrementQuantity(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }

  decrementQuantity(productId: number) {
    this.store.dispatch(decrementProduct({ productId }));

  }


}
