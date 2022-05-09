import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {LogoutComponent} from "./components/auth/logout/logout.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {ForgotPasswordComponent} from "./components/auth/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "./components/auth/reset-password/reset-password.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth.guard";
import {BooksComponent} from "./components/books/books.component";
import {BookEditComponent} from "./components/book-edit/book-edit.component";

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'logout', component : LogoutComponent, canActivate: [AuthGuard] },
  { path : 'register', component : RegisterComponent },
  { path : 'reset-password', component : ResetPasswordComponent },
  { path : 'forgot-password', component : ForgotPasswordComponent },
  { path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
  { path : 'books', component : BooksComponent },
  { path : 'book-edit/:id', component : BookEditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
