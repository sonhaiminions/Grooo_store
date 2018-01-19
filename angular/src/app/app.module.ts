import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { approuting } from './app.routing';

import { ListAppService } from './core/api/list-app-json.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    approuting,
  ],
  providers:
    [ListAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
