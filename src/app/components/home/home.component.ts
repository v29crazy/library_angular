import { Component, OnInit } from '@angular/core';
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public bookList : any ;
  public searchTerm:string ='';
  searchKey:string="";

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getActiveUserBooks().subscribe((res) => {
      this.bookList = res;
    }, (err) => {
      console.log(err)
    });

    this.homeService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.homeService.search.next(this.searchTerm);
  }

}
