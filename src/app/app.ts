import { Component, signal } from '@angular/core';
import { Products } from './shared/components/products/products';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corporate-coolie');
}
