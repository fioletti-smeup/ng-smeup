import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmeupRoutingModule } from './smeup-routing.module';
import { SmeupComponent } from './smeup.component';
import { SmeupService } from './smeup.service';
import { CompModule } from './comp/comp.module';
import { MaterialModule } from '@angular/material';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SmeupRoutingModule,
    CompModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [SmeupComponent],
  providers: [SmeupService]
})
export class SmeupModule { }
