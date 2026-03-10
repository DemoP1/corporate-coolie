import { HttpClient } from "@angular/common/http";
import { inject, Injectable, isStandalone } from "@angular/core";
import { IProduct } from "../models/products.interface";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
    http = inject(HttpClient)

    constructor() { }
    getProducts(){
        return this.http.get<IProduct[]>("https://fakestoreapi.com/products")
        .pipe(map((products) => {
            return products.map((products) =>{
                return { ...products, quantity: 1 }
            })
        }))
    }

    login(username: string, password: string) {
        // Simulate an API call for login
        return this.http.post('https://fakestoreapi.com/auth/login', { username, password });
    }
}