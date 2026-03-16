import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
selector:"app-product-card",
template:`
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
    <img class="w-full h-64 object-contain mb-4" src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png" alt="Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket">
    <div class="px-2 py-2">
        <h2 class="font-bold text-lg mb-2">Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket</h2>
        <p class="text-gray-700 text-base mb-2">
            100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON
        </p>
        <div class="flex items-center justify-between mb-2">
            <span class="text-gray-600 text-sm">Category: women's clothing</span>
            <span class="text-yellow-500 font-semibold">  2.9 <span class="text-gray-500 text-xs">(340)</span></span>
        </div>
        <div class="flex items-center justify-between mb-4">
            <span class="text-xl font-bold text-green-600">$29.95</span>
            <span class="text-gray-500 text-sm">Qty: 1</span>
        </div>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Add to Cart
        </button>
    </div>
</div>
`,
changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent{

}