import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.interface';
import { ProductApiService } from '../../services/product-api.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addToCart } from '../../states/cart/cart.action';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  http = inject(HttpClient)
  productApi = inject(ProductApiService)
  products$ = this.productApi.getProducts() as Observable<IProduct[]>;
  constructor(private store:Store<{cart:{products:IProduct[]}}>){ }

  
  addItemToCart(product:IProduct){
    this.store.dispatch(addToCart({product}))
  }

}
