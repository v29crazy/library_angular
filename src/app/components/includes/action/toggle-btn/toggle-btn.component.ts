import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {UsersService} from "../../../../services/users.service";
import {ICellRendererParams} from "ag-grid";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'app-toggle-btn',
  template: `
    <button #dltBtnRef  (click)="toggleClickedHandler(cellValue)"  class="ml-2 btn btn-sm btn-info">Toggle Status</button>
  `,
})
export class ToggleBtnComponent implements ICellRendererAngularComp{

  public cellValue: any;
  public rowData: any;

  constructor(
    private userService :UsersService,
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

  toggleClickedHandler(cellValue:any) {
    this.toggleUser(cellValue);
  }

  toggleUser(userId:any){
    this.userService.toggleUserStatus(userId).subscribe((res)=>{
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    },(err)=>{
      console.log(err);
    });
  }
}
