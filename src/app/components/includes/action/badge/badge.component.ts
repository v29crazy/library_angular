import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ICellRendererParams} from "ag-grid";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-badge',
  template: `
    <span *ngIf="cellValue"  class="badge badge-success">Active</span>
    <span *ngIf="!cellValue"  class="badge badge-dark">Disable</span>
  `,
})
export class BadgeComponent implements ICellRendererAngularComp {

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
