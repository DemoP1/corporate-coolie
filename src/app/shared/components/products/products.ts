import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.interface';
import { ProductApiService } from '../../services/product-api.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addToCart } from '../../states/cart/cart.action';
import * as productActions from '../../states/product/product.action';
import * as productSelectors from '../../states/product/product.selector';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  http = inject(HttpClient)
  productApi = inject(ProductApiService)
  products$!: Observable<IProduct[]>;
  error!: Observable<string | null>;
  constructor(private store:Store<{cart:{products:IProduct[]}}>){
    this.store.dispatch(productActions.loadProduct());
    this.products$ = this.store.select(productSelectors.selectAllProducts);
    this.error = this.store.select(productSelectors.selectAllProductError);
   }

  
  addItemToCart(product:IProduct){
    this.store.dispatch(addToCart({product}))
  }

}
