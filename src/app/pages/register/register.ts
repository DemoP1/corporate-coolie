import { Component, inject, signal } from "@angular/core";
import { form, required, minLength, validate, FormField } from "@angular/forms/signals";
import { RouterLink } from "@angular/router";
import { CustomFormError } from "../../shared/components/custom-form-error";
import { FormsModule } from "@angular/forms";
import { registerSchema } from "./register.schema";
import { Store } from "@ngrx/store";
import { AuthFeature } from "../../shared/store/auth.feature";
import { toSignal } from "@angular/core/rxjs-interop";
import { authActions } from "../../shared/store/auth.actions";
import { RegisterRequest } from "../../shared/services/auth-api";

@Component({
    selector: 'app-register',
    template: `
        <div class="w-full max-w-md">
            
            <form class="bg-white p-8 rounded-lg shadow-md" (ngSubmit)="ngsubmit($event)">
                <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">Register</h1>
                
              
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input type="text" [formField]="registerForm.username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter username">
                    <app-form-error [control]="registerForm.username()"></app-form-error>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="text" [formField]="registerForm.email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter full name">
                    <app-form-error [control]="registerForm.email()"></app-form-error>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" [formField]="registerForm.password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter password">
                    <app-form-error [control]="registerForm.password()"></app-form-error>   
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input type="password" [formField]="registerForm.confirmPassword" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm password">
                    <app-form-error [control]="registerForm.confirmPassword()"></app-form-error>
                </div>
                <button type="submit" [disabled]="isLoading() || registerForm().invalid()" class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition">
                    {{isLoading() ? 'Registering...' : 'Register'}}</button>
                 <div class="text-center mt-5 text-sm text-gray-600">
                    Already have an account? <a routerLink="/login" class="text-blue-600 hover:underline">Login</a>
                </div>
            </form>
               
                
        </div>
    `,
    host: {
        class: 'min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-violet-100'
    },
    imports: [RouterLink, FormField, CustomFormError, FormsModule]
})
export class Register {
    registerModel = signal({
        username: '',
        email:'',
        password: '',
        confirmPassword: ''
    })

    registerForm = form(this.registerModel, registerSchema);
    protected readonly store$ = inject(Store);
    protected readonly isLoading = toSignal(this.store$.select(AuthFeature.selectLoading));
    ngsubmit(event: Event) {
        event.preventDefault();
        const id = Date.now();
        const { confirmPassword, ...rest } = this.registerForm().value()
        const registerRequest = { id, ...rest }
        this.store$.dispatch(authActions.register(registerRequest))
    }

}
