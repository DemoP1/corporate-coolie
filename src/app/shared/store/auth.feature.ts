import { createFeature, createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.actions";

export type AuthState = {
    token: string | null;
    userId: string | null;
    loading: boolean;
    error: string | null;
}

export const initialAuthState: AuthState = {
    token: null,
    userId: null,
    loading: false,
    error: null
};

export const AuthFeature = createFeature({
    name: "auth",
    reducer: createReducer(
        initialAuthState,
        on(authActions.loginSuccess, (state, { token }) => ({
            ...state,
            token,
            loading: false,
        })),
        on(authActions.loginFailure, (state, { error }) => ({
            ...state,
            error,
            token: null,
        })),
        on(authActions.login, (state) => ({
            ...state,
            loading: true,
            error: null
        })),

        on(authActions.register, (state) => ({
            ...state,
            loading: true,
            error: null
        })),
        on(authActions.registerSuccess, (state) => ({
            ...state,
            loading: false,
            error: null
        })),
        on(authActions.registerFailure, (state, { error }) => ({
            ...state,
            error,
            loading: false
        }))


    )
})