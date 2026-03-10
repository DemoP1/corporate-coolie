import { minLength, required, schema, validate } from "@angular/forms/signals";

export type  registerModel= {
    fullName:string;
    username:string;
    password:string;
    confirmPassword:string;
}

export const  registerSchema=schema<registerModel>((rootPath) => {
    required(rootPath.fullName, { message: 'Full Name is required' });
    required(rootPath.username, { message: 'Username is required' });
    required(rootPath.password, { message: 'Password is required' });
    required(rootPath.confirmPassword, { message: 'Confirm Password is required' });
    minLength(rootPath.password, 6, { message: 'Password must be at least 6 characters long' });
    minLength(rootPath.confirmPassword, 6, { message: 'Confirm Password must be at least 6 characters long' });
    validate(rootPath.confirmPassword, () => {
        const password = rootPath.password;
        const confirmPassword = rootPath.confirmPassword;
        return password === confirmPassword ? null : {kind:'mismatch', message: 'Passwords do not match' };
    });
});