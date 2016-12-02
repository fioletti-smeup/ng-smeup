import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmeupRoutingModule } from './smeup-routing.module';
import { SmeupComponent } from './smeup.component';
import { SmeupService } from './smeup.service';
import { CompModule } from './comp/comp.module';

@NgModule({
  imports: [
    CommonModule,
    SmeupRoutingModule,
    CompModule
  ],
  declarations: [SmeupComponent],
  providers: [SmeupService]
})
export class SmeupModule { }
