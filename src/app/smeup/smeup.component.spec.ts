/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmeupComponent } from './smeup.component';

describe('SmeupComponent', () => {
  let component: SmeupComponent;
  let fixture: ComponentFixture<SmeupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmeupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmeupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
