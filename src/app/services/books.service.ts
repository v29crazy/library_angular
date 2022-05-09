import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get('http://127.0.0.1:8000/api/books');
  }

  addBooks(book:any){
    return this.http.post('http://127.0.0.1:8000/api/books', book);
  }

  deleteBook(bookId:any){
    return this.http.delete('http://127.0.0.1:8000/api/books/'+bookId);
  }

  getBook(bookId:any){
    return this.http.get('http://127.0.0.1:8000/api/books/'+bookId);
  }

  updateBook(bookId:any, book:any){
    return this.http.put('http://127.0.0.1:8000/api/books/'+bookId, book);
  }
}
