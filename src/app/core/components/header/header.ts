import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  template: `
   <h2> this header </h2>
   <h3>welcom</h3>
  `,
})
export class Header {
  store=inject(Store)

}
