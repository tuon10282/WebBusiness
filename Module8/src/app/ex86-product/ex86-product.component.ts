import { Component } from '@angular/core';

@Component({
  selector: 'app-ex86-product',
  standalone: false,
  templateUrl: './ex86-product.component.html',
  styleUrl: './ex86-product.component.css'
})
export class Ex86ProductComponent {
  product = 
    {
    "ProductId":"123",
    "ProductName":"Thuốc Trị Xàm",
    "Price":300,
    "Image":"assets/images/coca.png"
  }
;

}
