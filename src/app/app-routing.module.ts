import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {LogoutComponent} from "./components/auth/logout/logout.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AuthGuard} from "./services/auth.guard";
import {BooksComponent} from "./components/books/books.component";
import {BookEditComponent} from "./components/book-edit/book-edit.component";
import {UserComponent} from "./components/user/user.component";
import {UsersBooksComponent} from "./components/users-books/users-books.component";

const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'logout', component : LogoutComponent, canActivate: [AuthGuard] },
  { path : 'register', component : RegisterComponent },
  { path : 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
  { path : 'books', component : BooksComponent, canActivate: [AuthGuard] },
  { path : 'book-edit/:id', component : BookEditComponent, canActivate: [AuthGuard] },
  { path : 'user', component : UserComponent, canActivate: [AuthGuard] },
  { path : 'user-books/:id', component : UsersBooksComponent, canActivate: [AuthGuard] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule{}
