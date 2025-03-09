import { Component, OnInit } from '@angular/core';
import { FashionAPIService } from '../fashion-api.service';
import { CommonModule, NgFor, NgIf } from '@angular/common'; // ✅ Import NgFor và NgIf
import { Router } from '@angular/router';

@Component({
  selector: 'app-fashion',
  standalone: true,  // ✅ Thêm standalone component
  imports: [CommonModule, NgFor],  // ✅ Thêm NgFor và NgIf vào đây
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {  
  fashions: any;
  errMessage: string = '';

  constructor(private _service: FashionAPIService, private router: Router) {}

  ngOnInit() {  
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data; },
      error: (err) => { this.errMessage = err; }
    });
  }

  viewDetail(f: any) {
    this.router.navigate(['view-fashion-detail', f._id]);
  }
  addToCart(fashion: any) {
    console.log("Added to cart:", fashion);
    // Bạn có thể triển khai chức năng giỏ hàng ở đây
  }

}
