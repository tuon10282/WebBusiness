import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // ✅ Thêm RouterModule
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex86ProductComponent } from './ex86-product/ex86-product.component';
import { Ex87ProductlistComponent } from './ex87-productlist/ex87-productlist.component';
import { Ex88ProducteventComponent } from './ex88-productevent/ex88-productevent.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { Ex89Component } from './ex89/ex89.component';
import { HttpClientModule } from '@angular/common/http';
import { Ex90ServiceProductHttpComponent } from './ex90-service-product-http/ex90-service-product-http.component';
import { Ex91ServiceProductHttpHandleErrorComponent } from './ex91-service-product-http-handle-error/ex91-service-product-http-handle-error.component';
import { Ex92Component } from './ex92/ex92.component';
import { Ex93Component } from './ex93/ex93.component';
import { Ex94Component } from './ex94/ex94.component';
import { FormsModule } from '@angular/forms';
import { Ex95Component } from './ex95/ex95.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    Ex86ProductComponent,
    Ex87ProductlistComponent,
    Ex88ProducteventComponent,
    ServiceProductImageEventDetailComponent,
    Ex89Component,
    Ex90ServiceProductHttpComponent,
    Ex91ServiceProductHttpHandleErrorComponent,
    Ex92Component,
    Ex93Component,
    Ex94Component,
    Ex95Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]), // ✅ Thêm dòng này để cấu hình router
    HttpClientModule,  // 👈 Thêm cái này vào


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
