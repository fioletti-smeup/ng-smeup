import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import {
    Router,
} from '@angular/router';

@Component({
    selector: 'su-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    user: string = 'wu3_01';
    password: string = 'webup_04';

    constructor(private authService: AuthService, private router: Router) { }

    login(): boolean {
        this.authService.login(this.user, this.password).subscribe(() => {
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ?
                this.authService.redirectUrl : '/smeup';

                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
        return false;
    }
}
