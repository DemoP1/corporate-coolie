import { HttpClient } from "@angular/common/http";
import { inject, Injectable, isStandalone } from "@angular/core";
import { IProduct } from "../models/products.interface";
import { map } from "rxjs";
import { API_URL } from "../../app.config";

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

   
}