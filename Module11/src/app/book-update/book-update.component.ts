import { Component } from '@angular/core';
import { BookAPIService } from '../book-api.service';
import { Book, IBook } from '../../classes/IBook';

@Component({
  selector: 'app-book-update',
  standalone: false,
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.css'
})
export class BookUpdateComponent {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPIService){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  putBook()
  {
  this._service.putBook(this.book).subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  
}
