import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
@Component({
  selector: 'app-book-detail',
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent {
  book:any;
  errMessage:string=''
  constructor(private _service: BookAPIService){
  }
  searchBook(bookId:string)
  {
  this._service.getBook(bookId).subscribe({
  next:(data)=>{this.book=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  
}
