import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  templateUrl: './binding-two-way-component.component.html',
  styleUrl: './binding-two-way-component.component.css'
})
export class BindingTwoWayComponentComponent {
  public name:string=''
  public address:string=''
  public email: string = '';
  public phone: string = '';
  setDefaultAddress(){
  this.address='13 Hung Vuong street'
  }
}
