import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { productsActions } from './store/products.action';
import { productFeature } from './store/products.feature';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../../core/components/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
private readonly store= inject(Store);
protected readonly products=toSignal(this.store.select(productFeature.selectProducts))

ngOnInit(): void {
  this.store.dispatch(productsActions.load())
}


}
