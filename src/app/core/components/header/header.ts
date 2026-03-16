import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/components/button";
import {LucideAngularModule,LogOut,ShoppingCart,User} from 'lucide-angular'

@Component({
  selector: 'app-header',
  template: `
  <header class="bg-white border-b border-gray-200 sticky top-0 z-50">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Left side: Website Name -->
      <div class="flex-shrink-0 flex items-center">
        <a routerLink="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-500">
          NgrxStore
        </a>
      </div>

      <!-- Right side: Cart and Profile Icons -->
      <div class="flex items-center space-x-6">
         <button appButton variant="ghost" 
    (click)="onLogout()"
    class="ml-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50   hover:text-red-600 hover:border-red-200 transition-all duration-200 flex items-center gap-2">
    <lucide-icon [img]="icons.LogOut" class="size-4" />
    Logout
  </button>
        
        <!-- Cart Icon -->
        <button appButton variant="ghost" routerLink="/cart" type="button" class="group p-2 flex items-center relative text-gray-500 hover:text-gray-700">
              <lucide-icon [img]="icons.ShoppingCart" class="size-4" />

          <!-- Badge (Optional) -->
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            3
          </span>
        </button>

        <!-- Profile Icon -->
        <button routerLink="/profile" type="button" class="flex items-center text-gray-500 hover:text-gray-700">
          <lucide-icon [img]="icons.User" class="size-4" />

        </button>

      </div>
    </div>
  </nav>
</header>

  `,
  imports: [RouterLink, Button,LucideAngularModule]
})
export class Header {
  protected readonly icons={ShoppingCart,User,LogOut}

  onLogout(){

  }

}
