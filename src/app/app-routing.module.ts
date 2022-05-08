import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./compnents/auth/login/login.component";
import {HomeComponent} from "./compnents/home/home.component";
import {LogoutComponent} from "./compnents/auth/logout/logout.component";
import {RegisterComponent} from "./compnents/auth/register/register.component";
import {ForgotPasswordComponent} from "./compnents/auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./compnents/auth/reset-password/reset-password.component";
import {DashboardComponent} from "./compnents/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'logout', component : LogoutComponent, canActivate: [AuthGuard] },
  { path : 'register', component : RegisterComponent },
  { path : 'reset-password', component : ResetPasswordComponent },
  { path : 'forgot-password', component : ForgotPasswordComponent },
  { path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
