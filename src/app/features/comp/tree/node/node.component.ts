import { Component, OnInit, Input } from '@angular/core';

import { Node } from '../../node';

@Component({
  selector: 'su-node',
  templateUrl: './node.component.html'
})
export class NodeComponent implements OnInit {

  @Input() node: Node;

  constructor() { }

  ngOnInit() { }
}
