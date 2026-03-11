import { minLength, required, schema, validate } from "@angular/forms/signals";

export type  registerModel= {
    email:string;
    username:string;
    password:string;
    confirmPassword:string;
}

export const  registerSchema=schema<registerModel>((rootPath) => {
    required(rootPath.email, { message: 'email is required' });
    required(rootPath.username, { message: 'Username is required' });
    required(rootPath.password, { message: 'Password is required' });
    required(rootPath.confirmPassword, { message: 'Confirm Password is required' });
    minLength(rootPath.password, 6, { message: 'Password must be at least 6 characters long' });
    minLength(rootPath.confirmPassword, 6, { message: 'Confirm Password must be at least 6 characters long' });
    validate(rootPath.confirmPassword, ({value,valueOf}) => {
        const password =valueOf( rootPath.password);
        const confirmPassword = value();
        return password === confirmPassword ? null : {kind:'mismatch', message: 'Passwords do not match' };
    });
});