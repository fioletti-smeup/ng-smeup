import { Component, OnInit, Input } from '@angular/core';

import { Table } from './table';
import { Col } from './col';
import { Row } from './row';

@Component({
  selector: 'su-matrix',
  templateUrl: './matrix.component.html'
})
export class MatrixComponent implements OnInit {

  @Input() table: Table;

  constructor() { }

  ngOnInit() { }

  get cols(): Col[] {
    return this.table.cols;
  }

  get rows(): Row[] {
    return this.table.rows;
  }
}
