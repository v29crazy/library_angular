import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Book} from "../../class/book";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;
  book = new Book();

  // @ViewChild('closeModal') closeModal: ElementRef

  constructor(private bookService :BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBooks().subscribe((res)=>{
      this.books = res;
    },(err)=>{
      console.log(err);
    });
  }

  onSubmit(form:NgForm){
    const localData:any = localStorage.getItem('user');
    const userObj = JSON.parse(localData);
    this.book.user_id = userObj.id;

    this.bookService.addBooks(this.book).subscribe((res)=>{
      console.log(this.book);
      this.getBooks();
      // this.closeModal.nativeElement.click();
    },(err)=>{
      console.log(err);
    });
  }

  deleteBook(bookId:any){
    this.bookService.deleteBook(bookId).subscribe((res)=>{
      console.log(this.book);
      this.getBooks();
    },(err)=>{
      console.log(err);
    });
  }

  getBook(bookId:any){
    this.bookService.getBook(bookId).subscribe((res)=>{
      console.log(res);
    },(err)=>{
      console.log(err);
    });
  }

}
