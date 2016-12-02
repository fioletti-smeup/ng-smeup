import { Component, OnInit, Input } from '@angular/core';

import { Comp } from './comp';

@Component({
  selector: 'su-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  @Input() comp: Comp;

  constructor() { }

  ngOnInit() {
  }
}
