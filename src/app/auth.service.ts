import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Credentials } from './credentials';
import { ConfigService } from './config.service';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  env = "demo";
  credentials: Credentials;

  constructor(private configService: ConfigService, private http: Http) { }

  login(user: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('env', this.env);
    urlSearchParams.append('user', user);
    urlSearchParams.append('pwd', password);
    return this.http.post(this.configService.config.baseURL + '/auth/login', urlSearchParams.toString(), options)
      .map(response => response.json().data || {})
      .do(v => this.credentials = v)
      .map(v => !!v)
      .do(v => this.isLoggedIn = v).catch(this.handleError);;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
