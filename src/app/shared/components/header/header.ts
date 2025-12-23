import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartProducts } from '../../states/cart/cart.selector';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  store=inject(Store)
  products$ =this.store.select(selectCartProducts);

}
