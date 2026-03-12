import { Component } from "@angular/core";

@Component({
    selector:'app-footer',
    template:`
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-slate-800 border-t border-gray-200 md:flex md:items-center md:justify-between md:p-6">
    <!-- Left Side: Copyright -->
    <span class="text-sm text-gray-500 sm:text-center">
        © 2023 <a href="#" class="hover:underline">Store™</a>. All Rights Reserved.
    </span>

    <!-- Right Side: Navigation Links (Added space-x utility) -->
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 space-x-4 md:space-x-6">
        <li>
            <a href="#" class="hover:underline">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

    `
})
export class Footer{

}