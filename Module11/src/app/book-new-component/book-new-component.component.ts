import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookAPIService } from '../book-api.service';
import { Book, IBook } from '../../classes/IBook';
@Component({
  selector: 'app-book-new-component',
  standalone: false,
  templateUrl: './book-new-component.component.html',
  styleUrl: './book-new-component.component.css'
})
export class BookNewComponentComponent {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPIService){
  this._service.getBooks().subscribe({
  next:(data)=>{this.books=data},
  error:(err)=>{this.errMessage=err}
  })
  }
  postBook()
  {
  this._service.postBook(this.book).subscribe({
    next:(data)=>{this.books=data},
error:(err)=>{this.errMessage=err}
})
}
}

