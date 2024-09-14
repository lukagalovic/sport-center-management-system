import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<{
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        role: import("../../roles/entities/role.entity").Role;
        classes: import("../../classes/entities/class.entity").Class[];
        id: number;
    }>;
}
export {};
