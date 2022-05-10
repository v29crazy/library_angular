import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ColDef} from "ag-grid-community";

@Component({
  selector: 'app-users-books',
  templateUrl: './users-books.component.html',
  styleUrls: ['./users-books.component.css']
})
export class UsersBooksComponent implements OnInit {

  userId:any;
  users:any;
  rowData: Observable<any>;

  @ViewChild('closeButton') closeButton:any;

  constructor(
    private actRoute:ActivatedRoute,
    private http:HttpClient,
    private userService :UsersService,
    private router:Router,
  ) {
    this.userId = this.actRoute.snapshot.params.id;
    this.rowData = this.userService.userBooks(this.userId);
  }

  ngOnInit(): void {
  }

  columnDefs: ColDef[] = [
    { headerName:"Id", field:"id", sortable: true, filter: true, width:100 ,sortingOrder:["asc", "desc"]},
    { headerName:"Title", field:"title", sortable: true, filter: true, width:300, sortingOrder:["asc", "desc"]},
    { headerName:"Description", field:"description", sortable: true, width:500, filter: true, sortingOrder:["asc", "desc"]},
  ];


}
