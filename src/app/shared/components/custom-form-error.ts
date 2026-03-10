import { Component, computed, input } from "@angular/core";
import { FieldState } from "@angular/forms/signals";

type FormError = {
    kind: string;
    message: string;
};

@Component({
    selector: 'app-form-error',
    template: `
    @if(showErrors()) {
        @for(error of control().errors(); track error?.kind) {
            <p class="text-red-500 text-xs italic">{{ error.message }}</p>
        }
    }
    `
})
export class CustomFormError {
    readonly control = input.required<FieldState<unknown>>();
    protected readonly showErrors = computed(() => {
        const feild = this.control();
        return feild.invalid() && feild.touched();


    })
}