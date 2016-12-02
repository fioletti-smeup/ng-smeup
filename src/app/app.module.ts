import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SmeupModule } from './smeup/smeup.module';
import { LoginModule } from './login/login.module';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SmeupModule,
    LoginModule,
    MaterialModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
