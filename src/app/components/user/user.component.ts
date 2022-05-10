import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {UsersService} from "../../services/users.service";
import {ColDef} from "ag-grid-community";
import {ToggleBtnComponent} from "../includes/action/toggle-btn/toggle-btn.component";
import {BooksBtnComponent} from "../includes/action/books-btn/books-btn.component";
import {BadgeComponent} from "../includes/action/badge/badge.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  users:any;
  rowData: Observable<any>;

  @ViewChild('closeButton') closeButton:any;

  constructor(
    private auth:AuthenticationService,
    private http:HttpClient,
    private userService :UsersService,
    private router:Router,
  ) {
    this.rowData = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.auth.status().subscribe((res)=>{
      console.log(res);
    });
    this.auth.user().subscribe((res)=>{
      console.log(res)
      this.user = res;
    },(err)=>{
      console.log(err)
    })
  }

  public closeModal(){
    console.log(this.closeButton);
    this.closeButton.nativeElement.click();
  }

  columnDefs: ColDef[] = [
    { headerName:"Id", field:"id", sortable: true, filter: true, width:100 ,sortingOrder:["asc", "desc"]},
    { headerName:"Name", field:"name", sortable: true, filter: true, width:200, sortingOrder:["asc", "desc"]},
    { headerName:"Email", field:"email", sortable: true, width:300, filter: true, sortingOrder:["asc", "desc"]},
    { headerName:"Books", field:"is_active", width:200,
      cellRenderer: BadgeComponent, cellStyle: {textAlign: 'center'}
    },
    { headerName:"Books", field:"id", width:200,
      cellRenderer: BooksBtnComponent, cellStyle: {textAlign: 'center'}
    },
    { headerName:"Action", field:"id", width:200,
      cellRenderer: ToggleBtnComponent,cellStyle: {textAlign: 'center'}
    },
  ];

  frameworkComponents = { toggleBtnComponent: ToggleBtnComponent , booksBtnComponent: BooksBtnComponent, badgeComponent: BadgeComponent};

}
