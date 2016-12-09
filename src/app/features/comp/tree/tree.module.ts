import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2MaterialModule } from 'ng2-material';
import { TreeComponent } from './tree.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  imports: [CommonModule, Ng2MaterialModule],
  exports: [TreeComponent],
  declarations: [TreeComponent, NodeComponent],
  providers: [],
})
export class TreeModule { }
