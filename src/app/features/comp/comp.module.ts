import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp.component';
import { MatrixModule } from './matrix/matrix.module';
import { TreeModule } from './tree/tree.module';
import { IMLModule } from './iml/iml.module';

@NgModule({
  imports: [
    CommonModule,
    MatrixModule,
    TreeModule,
    IMLModule
  ],
  declarations: [CompComponent],
  exports: [CompComponent]
})
export class CompModule { }
