import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authUser:any;

  constructor( private router:Router, private  auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;
    // console.log(email,password);
    this.auth.login(email,password).subscribe((res:any)=>{
        this.authUser=JSON.stringify(res);
        localStorage.setItem('user', this.authUser);
        this.authUser=JSON.parse(JSON.stringify(res));
        console.log(this.authUser);
        if(this.authUser.is_admin==1){
          this.router.navigate(['/user']);
        }else{
          this.router.navigate(['/dashboard']);
        }
      }, err=>{
        console.log(err);
      })
  }

}
