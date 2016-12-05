/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CompModule } from './comp.module';

describe('CompModule', () => {
  let compModule;

  beforeEach(() => {
    compModule = new CompModule();
  });

  it('should create an instance', () => {
    expect(compModule).toBeTruthy();
  })
});
