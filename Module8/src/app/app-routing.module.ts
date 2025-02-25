import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { Ex88ProducteventComponent } from './ex88-productevent/ex88-productevent.component';
import { Ex86ProductComponent } from './ex86-product/ex86-product.component';
import { Ex87ProductlistComponent } from './ex87-productlist/ex87-productlist.component';
import { Ex90ServiceProductHttpComponent } from './ex90-service-product-http/ex90-service-product-http.component';
import { Ex95Component } from './ex95/ex95.component';

const routes: Routes = [
    {path:'service-product-image-event', 
    component:Ex88ProducteventComponent},
    {path:'service-product-image-event/:id', 
    component:ServiceProductImageEventDetailComponent},
    {path:'product',component:Ex86ProductComponent},
    {path:'list-product',component:Ex87ProductlistComponent},
    {path:'service-product',component:Ex90ServiceProductHttpComponent},
    {path:"**",component:Ex95Component}, // ** là wildcard route  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  Ex86ProductComponent,
  Ex87ProductlistComponent,
  Ex90ServiceProductHttpComponent,
  ]