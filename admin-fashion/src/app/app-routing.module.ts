import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionListComponent } from './fashion-list/fashion-list.component';
import { FashionDetailComponent } from './fashion-detail/fashion-detail.component';
import { FashionEditComponent } from './fashion-edit/fashion-edit.component';

const routes: Routes = [
  { path: '', component: FashionListComponent },
  { path: 'fashions', component: FashionListComponent },
  { path: 'fashion-detail/:id', component: FashionDetailComponent },
  { path: 'fashion-edit/:id', component: FashionEditComponent },
  { path: 'fashion-add', component: FashionEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
