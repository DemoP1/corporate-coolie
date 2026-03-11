import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LoginResponse, LoginTRequest, RegisterRequest } from "../services/auth-api";

export const authActions = createActionGroup({
    source: "Auth",
    events: {
        Login: props<LoginTRequest>(),
        loginSuccess: props<{token:string,userId:number | null}>(),
        loginFailure: props<{ error: string }>(),

        Register: props<RegisterRequest>(),
        registerSuccess: emptyProps(),
        registerFailure: props<{ error: string }>()
    }
})