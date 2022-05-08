import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './compnents/auth/login/login.component';
import { NavbarComponent } from './compnents/navbar/navbar.component';
import { RegisterComponent } from './compnents/auth/register/register.component';
import { ForgotPasswordComponent } from './compnents/auth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './compnents/auth/reset-password/reset-password.component';
import { DashboardComponent } from './compnents/dashboard/dashboard.component';
import { HomeComponent } from './compnents/home/home.component';
import { LogoutComponent } from './compnents/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
