import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp.component';

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [CompComponent],
  exports: [CompComponent]
})
export class CompModule { }
