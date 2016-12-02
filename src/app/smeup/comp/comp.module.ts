import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompComponent } from './comp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompComponent],
  exports: [CompComponent]
})
export class CompModule { }
