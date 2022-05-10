import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../../services/authentication.service";
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import {BooksService} from "../../services/books.service";
import {DeleteBtnComponent} from "../includes/action/delete-btn/delete-btn.component";
import {Book} from "../../class/book";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any;
  books:any;
  authUser:any;
  book = new Book();
  rowData: Observable<any>;

  // profilePhoto!: File;
  // profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   description: new FormControl(''),
  //   content: new FormControl(''),
  //   image: new FormControl(),
  // });

  @ViewChild('closeButton') closeButton:any;

  constructor(
    private auth:AuthenticationService,
    private http:HttpClient,
    private bookService :BooksService,
    private userService :UsersService,
    private router:Router,
    ) {
    const user:any = localStorage.getItem('user');
    const userObj:any = JSON.parse(user);

    this.rowData = this.userService.userBooks(userObj.id);
    if(userObj.is_admin==1){
      this.router.navigate(['/user']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

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

  public closeModal(){
    console.log(this.closeButton);
      this.closeButton.nativeElement.click();
  }

  // previewMenu(files: any) {
  //   this.profilePhoto = files[0];
  // }

  columnDefs: ColDef[] = [
    { headerName:"Id", field:"id", sortable: true, filter: true, width:100 ,sortingOrder:["asc", "desc"]},
    { headerName:"Title", field:"title", sortable: true, filter: true, width:200, sortingOrder:["asc", "desc"]},
    { headerName:"Description", field:"description", sortable: true, width:300, filter: true, sortingOrder:["asc", "desc"]},
    { headerName:"User", field:"user_name", sortable: true, width:200, filter: true, sortingOrder:["asc", "desc"],cellStyle: {textAlign: 'center'}},
    { headerName:"Action", field:"id", width:200,
      cellRenderer: DeleteBtnComponent,cellStyle: {textAlign: 'center'}
    },
  ];

  frameworkComponents = { deleteBtnComponent: DeleteBtnComponent };

  onSubmit(form:NgForm){
    this.bookService.addBooks(this.book).subscribe((res)=>{
      console.log(this.book);
      const user:any = localStorage.getItem('user');
      const userObj:any = JSON.parse(user);
      this.rowData = this.userService.userBooks(userObj.id);
      form.reset();
      this.closeModal();
      //modal close
    },(err)=>{
      console.log(err);
    });
  }

  onEditSubmit(bookId:any){
    this.bookService.updateBook(bookId,this.book).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/books'])
    },(err)=>{
      console.log(err);
    });
  }

  // onSubmitform(f: NgForm) {
  //
  //   var myFormData = new FormData();
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   myFormData.append('image', this.filedata);
  //   myFormData.append('formData', JSON.stringify(f.value));
  //   console.log(myFormData);
  //   /* Image Post Request */
  //   this.http.post('http://127.0.0.1:8000/api/books', myFormData, {
  //     headers: headers
  //   }).subscribe((data:any) => {
  //     console.log(data);
  //     //Check success message
  //     //sweetalert message popup
  //   });
  //
  // }

  // submitPropfileForm(form: any) {
  //   console.log(form.value);
  //   const newForm = new FormData();
  //   newForm.append('image', this.profilePhoto);
  //   newForm.append('formData', JSON.stringify(form.value));
  //   // this.apiService.updateGuest(newForm).subscribe((response: any) => {
  //   //   this.guest = response.data;
  //   //   this.patchValuesToGuest();
  //   // });
  //
  //   this.bookService.addBooks(newForm).subscribe((res)=>{
  //     console.log(newForm);
  //     this.rowData = this.bookService.getMyBooks();
  //     form.reset();
  //     this.closeModal();
  //     //modal close
  //   },(err)=>{
  //     console.log(err);
  //   });
  //
  // }
}
