import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-ex93',
  standalone: false,
  templateUrl: './ex93.component.html',
  styleUrl: './ex93.component.css'
})
export class Ex93Component {
  categories:any;
  constructor(private _service: CustomerService){
  this._service.getCustomers().subscribe({
  next:(data)=>{this.categories=data} 
  })
  }

}
