import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName:any='';
  userEmail:any='';
  userRole:any='';
  loggedIn:boolean = false;

  constructor(private auth:AuthenticationService) {
  }

  ngOnInit(): void {
    this.auth.status().subscribe((res)=>{
      this.loggedIn = res;
      if(res){
        const user:any = localStorage.getItem('user');
        const userObj:any = JSON.parse(user);
        this.userName=userObj.name;
        this.userEmail=userObj.email;
        this.userRole=userObj.is_admin?'Administrator':'User';
      }
    },
    (err)=>{
      console.log(err)
    })
  }

}
