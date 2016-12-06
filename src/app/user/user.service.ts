import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';

@Injectable()
export class UserService extends RequestBase {
  constructor(public http: Http, private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    super(http);
  }

  logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`, this.optionsNoPre)
      .map(res => res.text());
  }

  login(user: string, password: string): void {

    let isLoggedId = false;
    this.authService.login(user, password)
      .subscribe(() => {
        this.store.select(state => state.user.jwt).subscribe(v => isLoggedId = !!v);
        if (isLoggedId) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ?
            this.authService.redirectUrl : '/smeup';

          // Redirect the user
          this.router.navigate([redirect]);
        }
      });

  }
}
