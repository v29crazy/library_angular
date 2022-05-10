import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { BooksComponent } from './components/books/books.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import {AgGridModule} from "ag-grid-angular";
import { DeleteBtnComponent } from './components/includes/action/delete-btn/delete-btn.component';
import { UserComponent } from './components/user/user.component';
import { ToggleBtnComponent } from './components/includes/action/toggle-btn/toggle-btn.component';
import { BadgeComponent } from './components/includes/action/badge/badge.component';
import { UsersBooksComponent } from './components/users-books/users-books.component';
import { BooksBtnComponent } from './components/includes/action/books-btn/books-btn.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    LogoutComponent,
    BooksComponent,
    BookEditComponent,
    DeleteBtnComponent,
    UserComponent,
    ToggleBtnComponent,
    BadgeComponent,
    UsersBooksComponent,
    BooksBtnComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule.withComponents([DeleteBtnComponent]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
