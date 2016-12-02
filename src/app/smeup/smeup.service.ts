import { Injectable } from '@angular/core';

import { AuthService } from '../auth.service';
import { Credentials } from '../credentials';

import { Observable } from 'rxjs/Observable';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { ConfigService } from '../config.service';

import { Comp } from './comp/comp';

@Injectable()
export class SmeupService {

  constructor(private authService: AuthService, private configService: ConfigService, private http: Http) { }

  getComp(fun: string): Observable<Comp> {

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer ' + this.authService.credentials.JWT });
    let options = new RequestOptions({ headers: headers });
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('fun', fun);
    return this.http.post(this.configService.config.baseURL + '/comp/get', urlSearchParams.toString(), options)
      .map(response => response.json().comp || {}).catch(this.handleError);
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
