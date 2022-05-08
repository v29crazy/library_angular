import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errors={
    name:null,
    email:null,
    password:null,
  };
  constructor(private auth:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    const name = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const password_confirmation = form.value.password_confirmation;

    // console.log(form.value)
    this.auth.register(name,email,password,password_confirmation).subscribe((res)=>{
      // console.log(res)
      this.router.navigate(['/login']);
    },(err)=>{

      this.errors = err.error.errors;
      // console.log(err.error.errors)
      // console.log(err.error)
    })
  }

}
