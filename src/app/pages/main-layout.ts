import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../core/components/footer/footer";
import { Header } from "../core/components/header/header";

@Component({
    selector: 'app-main-layout',
    imports: [RouterOutlet,Footer,Header],
    template:`
    <app-header />
   <router-outlet />
   <app-footer />
    `
})
export class MainLayout{

}