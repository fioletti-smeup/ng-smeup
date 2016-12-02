import { Component } from '@angular/core';

import { AuthService } from './auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'su-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sme UP';

  constructor(private router: Router, private authService: AuthService) {

  }

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  logout(): boolean {

    this.authService.logout();
    return false;
  }
}
