import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrl: './service-product-image-event-detail.component.css'
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct:any
  constructor(private activateRoute:ActivatedRoute,private _fs:ProductServiceService, 
  private router:Router)
  {
  activateRoute.paramMap.subscribe(
  (param)=>{
  let id=param.get('id')
  if(id!=null)
  {
  this.selectedProduct=_fs.getProductDetail(id) 
  }
  }
  )
  }
  goBack(){
  this.router.navigate(['service-product-image-event'])
  }
  
}
