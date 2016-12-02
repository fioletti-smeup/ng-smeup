/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SmeupService } from './smeup.service';

describe('SmeupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SmeupService]
    });
  });

  it('should ...', inject([SmeupService], (service: SmeupService) => {
    expect(service).toBeTruthy();
  }));
});
