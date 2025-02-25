import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import {CommonModule} from '@angular/common'
@Component({
selector: 'app-fashion',
imports: [CommonModule],
templateUrl: './fashion.component.html',
styleUrls: ['./fashion.component.css']
})
export class FashionComponent {
fashions:any;
errMessage:string=''
constructor(public _service: FashionAPIService){
this._service.getFashions().subscribe({
next:(data)=>{this.fashions=data},
error:(err)=>{this.errMessage=err}
})
} 
}