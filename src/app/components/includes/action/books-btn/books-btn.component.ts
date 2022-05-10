import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {Router} from "@angular/router";
import {ICellRendererParams} from "ag-grid";

@Component({
  selector: 'app-books-btn',
  template: `
    <button routerLink="/user-books/{{cellValue}}" class="btn btn-sm btn-warning">View</button>
  `,
})
export class BooksBtnComponent implements ICellRendererAngularComp {


  private params: any;
  public cellValue: any;

  constructor(private router:Router) {
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
}
