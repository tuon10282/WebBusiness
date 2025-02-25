import { Component } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-delete',
  standalone: false,
  templateUrl: './fashion-delete.component.html',
  styleUrl: './fashion-delete.component.css'
})
export class FashionDeleteComponent {
  fashions: any[] = [];  // Khai báo mảng fashions ban đầu là mảng rỗng
  errMessage: string = '';

  constructor(private _service: FashionAPIService) {
    // Lấy danh sách fashions khi component khởi tạo
    this._service.getFashions().subscribe({
      next: (data) => { 
        this.fashions = data; 
      },
      error: (err) => { 
        this.errMessage = err; 
      }
    });
  }

  deleteFashion(fashionId: any) {
    // Gọi API để xóa fashion theo fashionId
    this._service.deleteFashion(fashionId).subscribe({
      next: () => {
        // Sau khi xóa, loại bỏ fashionId khỏi mảng fashions
        this.fashions = this.fashions.filter(fashion => fashion._id !== fashionId);
      },
      error: (err) => { 
        this.errMessage = err; 
      }
    });
  }
}
