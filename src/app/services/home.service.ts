import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalService} from "./global.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public search = new BehaviorSubject<string>("");

  constructor(
    private http:HttpClient,
    private globeService: GlobalService) {
  }

  getActiveUserBooks(){
    return this.http.get(this.globeService.baseURL+'active-user-books', this.globeService.getHttpOptions());
  }
}
