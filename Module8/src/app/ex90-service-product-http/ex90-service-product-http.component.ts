import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-ex90-service-product-http',
  standalone: false,
  templateUrl: './ex90-service-product-http.component.html',
  styleUrl: './ex90-service-product-http.component.css'
})
export class Ex90ServiceProductHttpComponent {
  products:any;
  constructor(private _service: ProductHttpService){
  this._service.getProducts().subscribe({
  next:(data)=>{this.products=data} 
  })
  }  
}
