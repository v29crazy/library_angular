import { EventEmitter, Inject, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
// import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public baseURL = environment.url;

  constructor(
    private http: HttpClient,
    private router: Router,
    // private toastService: ToastrService
  ) {
    // this.selectedChild = JSON.parse(localStorage.getItem('child'));
  }

  // successNotification(message: string) {
  //   this.toastService.success(message,'Success.', {
  //     timeOut: 5000,
  //     positionClass: 'toast-top-right'
  //   });
  // }
  //
  // errorNotification(message: string = 'Something went wrong!') {
  //   this.toastService.error( message, 'Error.', {
  //     timeOut: 5000,
  //     positionClass: 'toast-top-right'
  //   });
  // }
  //
  // warningNotification(message: string) {
  //   this.toastService.warning( message, 'Warning.',{
  //     timeOut: 5000,
  //     positionClass: 'toast-bottom-right'
  //   });
  // }

  getAPIURL() {
    return environment.url;
  }

  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  /**
   * Http Option for auth routers
   */
  getHttpOptionsAuth() {
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-control-allow-origin': "*",
        Authorization: 'Bearer ' + userObj.token
      })
    };
  }

  /**
   * Http Option for auth and upload file
   */
  getHttpOptionsAuthWithOutContentType() {
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);
    return {
      headers: new HttpHeaders({
        'access-control-allow-origin': "*",
        Authorization: 'Bearer ' + userObj.token
      })
    };
  }

  getHttpOptionsAuthWithFile() {
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);
    return {
      headers: new HttpHeaders({
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'access-control-allow-origin': "*",
        Authorization: 'Bearer ' + userObj.token
      })
    };
  }

}
