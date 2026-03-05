import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/models/products.interface';
import { AppState } from '../../shared/states/app.state';
import { removeProduct, incrementProduct, decrementProduct } from '../../shared/states/cart/cart.action';
import { selectCartProducts, selectTotal, totalItems } from '../../shared/states/cart/cart.selector';

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
