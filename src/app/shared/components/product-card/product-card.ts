import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/products.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!:IProduct;
  @Output() addToCartEvent = new EventEmitter<IProduct>();


  addToCart(){
    this.addToCartEvent.emit(this.product);
  }
}
