import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  checkbox:any = false;
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    // console.log(this.checkbox)
    this.auth.logout(this.checkbox).subscribe((res)=>{
      console.log(res);
      localStorage.removeItem('user');
      this.auth.toggleLgin(false);
      this.router.navigate(['/']);
    },(err)=>{
        console.log(err);
      })
  }

}
