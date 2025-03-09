import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fashion-detail',
  standalone: false,
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.css'
})
export class FashionDetailComponent {
  fashion:any;
  errMessage:string=''
  constructor(public _service: FashionAPIService, private activateRoute:ActivatedRoute){
  activateRoute.paramMap.subscribe(
    (param)=>{
    let id=param.get('id')
    if(id!=null)
    {
    this.searchFashion(id)
    }
    }
  )
}

  searchFashion(fashionId:string)
  {
  this._service.getFashion(fashionId).subscribe({
  next:(data)=>{this.fashion=data},
  error:(err)=>{this.errMessage=err}
  })
  } 
}
