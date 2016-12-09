import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IMLComponent }   from './iml.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MaterialModule],
  exports: [IMLComponent],
  declarations: [IMLComponent],
  providers: [],
})
export class IMLModule { }
