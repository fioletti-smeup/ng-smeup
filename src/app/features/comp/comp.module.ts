import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp.component';
import { MatrixModule } from './matrix/matrix.module';
import { TreeModule } from './tree/tree.module';

@NgModule({
  imports: [
    CommonModule,
    MatrixModule,
    TreeModule
  ],
  declarations: [CompComponent],
  exports: [CompComponent]
})
export class CompModule { }
