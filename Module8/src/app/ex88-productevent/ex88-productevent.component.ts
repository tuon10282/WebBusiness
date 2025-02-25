import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex88-productevent',
  standalone: false,
  templateUrl: './ex88-productevent.component.html',
  styleUrl: './ex88-productevent.component.css'
})
export class Ex88ProducteventComponent {
  public products:any
  constructor(pservice: ProductServiceService,private router:Router){
  this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
  this.router.navigate(['service-product-image-event',f.ProductId])
  }
  
}
