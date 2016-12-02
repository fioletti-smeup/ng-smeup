import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
