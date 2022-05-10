import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {GlobalService} from "./global.service";
import {Observable} from "rxjs";
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http:HttpClient,
    private globeService: GlobalService) {
  }

  getBooks(){
    return this.http.get(this.globeService.baseURL+'all-books', this.globeService.getHttpOptions());
  }

  addBooks(book:any){
    return this.http.post(this.globeService.baseURL+'books', book, this.globeService.getHttpOptionsAuth());
  }

  deleteBook(bookId:any){
    return this.http.delete(this.globeService.baseURL+'books/'+bookId, this.globeService.getHttpOptionsAuth());
  }

  getBook(bookId:any){
    return this.http.get(this.globeService.baseURL+'books/'+bookId, this.globeService.getHttpOptionsAuth());
  }

  updateBook(bookId:any, book:any){
    return this.http.put(this.globeService.baseURL+'books/'+bookId, book, this.globeService.getHttpOptionsAuth());
  }

  getMyBooks(){
    return this.http.get(this.globeService.baseURL+'books',this.globeService.getHttpOptionsAuth());
  }
}
