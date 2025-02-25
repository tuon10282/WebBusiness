import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // ✅ Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionNewComponent } from './fashion-new/fashion-new.component';
import { FormsModule } from '@angular/forms';
import { FashionUpdateComponent } from './fashion-update/fashion-update.component';
import { FashionDeleteComponent } from './fashion-delete/fashion-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FashionDetailComponent,
    FashionNewComponent,
    FashionUpdateComponent,
    FashionDeleteComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,  // ✅ Add this to imports
    AppRoutingModule,
    FashionComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
