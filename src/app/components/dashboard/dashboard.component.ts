import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }
  user:any;
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

}
