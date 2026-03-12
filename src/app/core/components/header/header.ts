import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/components/button";

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
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
    Logout
  </button>
        
        <!-- Cart Icon -->
        <button appButton variant="ghost" routerLink="/cart" type="button" class="group p-2 flex items-center relative text-gray-500 hover:text-gray-700">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <!-- Badge (Optional) -->
          <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            3
          </span>
        </button>

        <!-- Profile Icon -->
        <button routerLink="/profile" type="button" class="flex items-center text-gray-500 hover:text-gray-700">
          <svg class="h-8 w-8 rounded-full border border-gray-300 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </button>

      </div>
    </div>
  </nav>
</header>

  `,
  imports: [RouterLink, Button]
})
export class Header {

  onLogout(){

  }

}
