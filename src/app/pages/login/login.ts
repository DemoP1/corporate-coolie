import { Button } from "../../shared/components/button";
import { RouterLink } from "@angular/router";
import {Component, inject, signal} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { ProductApiService } from "../../shared/services/product-api.service";



@Component({
    selector: 'app-login',
    template: `
        <div class="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
            <h2 class="text-center text-2xl font-bold text-blue-600 mb-8">Login</h2>
            @if (apiError()) {
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong class="font-bold">Error!</strong> 
                    <span class="block sm:inline">{{ apiError() }}</span>
                    <button type="button" class="absolute top-0 right-0 mt-4 mr-4" (click)="apiError.set(null)">
                        <svg class="w-6 h-6 text-red-700" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                </div>
            }
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
                <div class="mb-5">
                    <label for="username" class="block text-gray-700 font-semibold mb-2">Username</label>
                    <input type="text" formControlName="username" id="username" placeholder="Enter username" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" required>
                </div>
                <div class="mb-5">
                    <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
                    <input type="password" formControlName="password" id="password" placeholder="Enter password" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" required>
                </div>
                <div class="text-right mb-5">
                    <a href="#" class="text-blue-600 text-sm hover:underline">Forgot Password?</a>
                </div>
                <button appButton variant="secondary" size="md" type="submit" class="w-full  text-blue-600 font-semibold py-2 rounded-md transition">Sign In</button>
                <div class="text-center mt-5 text-sm text-gray-600">
                    Don't have an account? <a routerLink="/register" class="text-blue-600 hover:underline">Sign Up</a>
                </div>
            </form>
        </div>
    `,
    host: {
        class: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100'
    },
    imports: [Button, RouterLink,ReactiveFormsModule]
})
export class LoginPage {
http = inject(ProductApiService)
apiError = signal<string | null>(null);
   
    loginForm= new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    })
    onSubmit(){
            console.log('Login data:', this.loginForm);

        if(this.loginForm.valid){
            const {username,password}= this.loginForm.value;
            console.log('Login data:', {username,password});
            this.http.login(username!, password!).subscribe({
                next: (response) => {

                    console.log('Login successful:', response); 
                },
                error: (error) => {
                    console.error('Login failed:', error); 
                    this.apiError.set(error.error || 'An error occurred during login. Please try again.');
                }
            });
            // Here you can add your authentication logic, e.g., call an API to verify credentials
        } else {
            console.log('Form is invalid');
        } 

    }

}
