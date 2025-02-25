import { Component } from '@angular/core';

@Component({
  selector: 'app-ex92',
  standalone: false,
  templateUrl: './ex92.component.html',
  styleUrl: './ex92.component.css'
})
export class Ex92Component {
  customer={
    "Id":"Cus123",
    "Name":"Obama",
    "Email":"obama@gmail.com",
    "Age":67,
    "Image":"assets/images/obama-avatar.png"
    }
}
