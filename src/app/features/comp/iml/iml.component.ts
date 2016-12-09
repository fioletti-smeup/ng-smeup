import { Component, OnInit, Input } from '@angular/core';

import { IML } from './iml';
import { Node } from '../node';

@Component({
  moduleId: module.id,
  selector: 'su-iml',
  templateUrl: 'iml.component.html'
})
export class IMLComponent implements OnInit {

  @Input() iml: IML;

  constructor() { }

  ngOnInit() { }

  get ns(): Node[] {
    return this.iml.ns;
  }
}
