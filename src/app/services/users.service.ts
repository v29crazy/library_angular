import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "./global.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http:HttpClient,
    private globeService: GlobalService) {
  }

  getUsers(){
    return this.http.get(this.globeService.baseURL+'all-users', this.globeService.getHttpOptionsAuth());
  }

  toggleUserStatus(userId:any){
    return this.http.get(this.globeService.baseURL+'user-toggle/'+userId, this.globeService.getHttpOptionsAuth());
  }

  userBooks(userId:any){
    return this.http.get(this.globeService.baseURL+'user-books/'+userId, this.globeService.getHttpOptionsAuth());
  }

}
