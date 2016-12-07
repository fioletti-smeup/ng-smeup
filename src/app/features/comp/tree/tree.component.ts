import { Component, OnInit, Input } from '@angular/core';

import { Tree } from './tree';

@Component({
  selector: 'su-tree',
  templateUrl: './tree.component.html'
})
export class TreeComponent implements OnInit {

  @Input() tree: Tree;

  constructor() { }

  ngOnInit() { }

}
