import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BooksService} from "../../services/books.service";
import {Book} from "../../class/book";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookId:any;
  book:any = new Book();

  constructor(
    private actRoute:ActivatedRoute,
    private bookService:BooksService,
    private router:Router) { }

  ngOnInit(): void {
    this.bookId = this.actRoute.snapshot.params.id;
    this.bookService.getBook(this.bookId).subscribe((res)=>{
      console.log(res);
      this.book = res;
    },(err)=>{
      console.log(err);
    });
  }

  onEditSubmit(bookId:any){
    this.bookService.updateBook(this.bookId,this.book).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/dashboard'])
    },(err)=>{
      console.log(err);
    });
  }
}
