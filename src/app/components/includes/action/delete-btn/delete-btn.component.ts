import {Component, Injectable, ViewChild} from '@angular/core';
import {ICellRendererParams} from "ag-grid";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {BooksService} from "../../../../services/books.service";
import {Book} from "../../../../class/book";
import {Router} from "@angular/router";
import {Location} from "@angular/common";


@Component({
  selector: 'app-delete-btn',
  template: `
    <button routerLink="/book-edit/{{cellValue}}" class="btn btn-sm btn-warning">Edit</button>
<!--    <button #editBtnRef (click)="editBtnClickedHandler(cellValue)" class="btn btn-sm btn-warning">Edit</button>-->
    <button #dltBtnRef  (click)="dltEtnClickedHandler(cellValue)"  class="ml-2 btn btn-sm btn-danger">Delete</button>
  `,
})
export class DeleteBtnComponent implements ICellRendererAngularComp{

  private params: any;
  public cellValue: any;
  public rowData: any;
  book:any = new Book();

  @ViewChild('openModalButton') openModalButton:any;

  constructor(
    private bookService :BooksService,
    private router:Router,
    private location: Location) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams) {
    this.cellValue = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  dltEtnClickedHandler(cellValue:any) {
    this.deleteBook(cellValue);
  }

  editBtnClickedHandler(cellValue:any) {
    this.getBook(cellValue);
    console.log(this.openModalButton);
    this.openModalButton.nativeElement.click();
  }

  deleteBook(bookId:any){
    this.bookService.deleteBook(bookId).subscribe((res)=>{
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    },(err)=>{
      console.log(err);
    });
  }

  getBook(bookId:any){
    this.bookService.getBook(bookId).subscribe((res)=>{
      console.log(res);
      this.book = res;
    },(err)=>{
      console.log(err);
    });
  }
}
