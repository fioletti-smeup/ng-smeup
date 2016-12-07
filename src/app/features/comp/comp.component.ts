import { Component, OnInit, Input } from '@angular/core';

import { Comp } from './comp';

@Component({
  selector: 'su-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent implements OnInit {

  private static SMEUP_COMPS = ['EXD', 'SPL', 'LAB', 'BTN', 'TRE', 'IML', 'MAT'];
  @Input() comp: Comp;

  constructor() { }

  ngOnInit() {
  }

  get isSmeupComp(): boolean {
    return CompComponent.SMEUP_COMPS.indexOf(this.comp.type) > -1;
  }
}
