import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponentComponent } from './book-new-component/book-new-component.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponentComponent,
    BookUpdateComponent,
    BookDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // Add this to resolve the ngModel error
    FileUploadComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
