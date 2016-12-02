import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;
        return this.checkLogin();
    }

    private checkLogin(): boolean {

        if (this.authService.isLoggedIn) { return true; }

        this.router.navigate(['/login']);
        return false;
    }
}
