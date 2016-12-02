import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmeupRoutingModule } from './smeup-routing.module';
import { SmeupComponent } from './smeup.component';
import { SmeupService } from './smeup.service';
import { CompModule } from './comp/comp.module';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SmeupRoutingModule,
    CompModule,
    MaterialModule,
  ],
  declarations: [SmeupComponent],
  providers: [SmeupService]
})
export class SmeupModule { }
