import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private  isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  toggleLgin(state:boolean):void{
    this.isLoggedIn.next(state);
  }

  status(){
    const localData:any = localStorage.getItem('user');
    if(!localData){
      this.isLoggedIn.next(false);
      console.log("User not logged in!");
    }else{
      const userObj = JSON.parse(localData);
      const token_expire_at = new Date(userObj.token_expired_at);
      const current_date = new Date();
      if(token_expire_at>current_date){
        this.isLoggedIn.next(true);
      }else{
        this.isLoggedIn.next(false);
        console.log("Token Expired!");
      }
      // console.log(token_expire_at);
      // console.log(current_date);
    }
    return  this.isLoggedIn.asObservable();
  }
  login(email:string, password:string){
    return this.http.post('http://127.0.0.1:8000/api/login',{
      email:email,
      password:password
    });
  }

  user(){
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);
    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('http://127.0.0.1:8000/api/user', {headers: headers});
  }

  logout(allDevice:boolean){
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);
    const token = userObj.token;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('http://127.0.0.1:8000/api/logout', {allDevice:allDevice}, {headers:headers});
  }

  register(name:string, email:string, password:string, password_confirmation:string){
    const data = {
      name:name,
      email:email,
      password:password,
      password_confirmation:password_confirmation,
    };
    return this.http.post('http://127.0.0.1:8000/api/register', data)
  }
}
