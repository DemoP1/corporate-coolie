import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-register',
    template: `
        <div class="w-full max-w-md">
            
            <form class="bg-white p-8 rounded-lg shadow-md">
                <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Register</h1>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter full name">
                </div>
              
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter password">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm password">
                </div>
                <button type="submit"  class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition">Sign In</button>
                 <div class="text-center mt-5 text-sm text-gray-600">
                    Already have an account? <a routerLink="/login" class="text-blue-600 hover:underline">Login</a>
                </div>
            </form>
               
                
        </div>
    `,
    host: {
        class: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100'
    },
    imports: [RouterLink]
})
export class Register {

}
