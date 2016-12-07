import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2MaterialModule } from 'ng2-material';
import { MatrixComponent } from './matrix.component';

@NgModule({
  imports: [CommonModule, Ng2MaterialModule],
  exports: [MatrixComponent],
  declarations: [MatrixComponent],
  providers: [],
})
export class MatrixModule { }
