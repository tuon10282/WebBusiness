import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { Fashion } from '../../classes/Fashion';


@Component({
  selector: 'app-fashion-update',
  standalone: false,
  templateUrl: './fashion-update.component.html',
  styleUrl: './fashion-update.component.css'
})
export class FashionUpdateComponent {
  fashion=new Fashion();
  errMessage:string=''
  constructor(private _service: FashionAPIService){
  }
  public setFashion(f:Fashion)
  {
  this.fashion=f
  }
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Lấy file được chọn
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.fashion.fashion_image = reader.result as string; // Lưu ảnh dưới dạng base64
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng Base64
    }
  }
  
  putFashion()
  {
  this._service.putFashion(this.fashion).subscribe({
  next:(data)=>{this.fashion=data},
  error:(err)=>{this.errMessage=err}
  })
  }
}
