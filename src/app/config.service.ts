import { Injectable } from '@angular/core';

import { Config } from './config';

@Injectable()
export class ConfigService {

  config: Config;
  // TODO: Put in an external configuration
  baseURL = 'http://localhost:8080/WebUP/services';
  constructor() {
    this.config = { "baseURL": this.baseURL };
  }
}
