import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgToastComponent } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[RouterOutlet,NgToastComponent],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('corporate-coolie');
}
