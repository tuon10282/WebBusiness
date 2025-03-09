import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';

const routes: Routes = [
  {path:"view-fashion-detail/:id",component:FashionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
