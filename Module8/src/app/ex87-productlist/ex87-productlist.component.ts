import { Component } from '@angular/core';

@Component({
  selector: 'app-ex87-productlist',
  standalone: false,
  templateUrl: './ex87-productlist.component.html',
  styleUrl: './ex87-productlist.component.css'
})
export class Ex87ProductlistComponent {
  products =[
      {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/images/coca.png"},
      {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/images/pepsi.png"},
      {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/images/sting.png"}
  ]
}
