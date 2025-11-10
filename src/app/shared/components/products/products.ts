import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Observable } from 'rxjs';
import { IProduct } from '../../models/products.interface';

@Component({
  selector: 'app-products',
  imports: [CommonModule,ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
   http=inject(HttpClient)
   products$= this.http.get("https://fakestoreapi.com/products") as Observable<IProduct[]>;

}
