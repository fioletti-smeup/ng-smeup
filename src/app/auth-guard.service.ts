import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private authService: AuthService,
        private store: Store<AppState>,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = state.url;
        return this.checkLogin();
    }

    private checkLogin(): boolean {
        let isLoggedIn = false;
        this.store.select(state => state.user.jwt).subscribe(v => isLoggedIn = !!v);
        if (isLoggedIn) { return true; }

        this.router.navigate(['/login']);
        return false;
    }
}
