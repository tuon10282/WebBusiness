import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  templateUrl: './binding-style-component.component.html',
  styleUrl: './binding-style-component.component.css'
})
export class BindingStyleComponentComponent {
  public isError:boolean=false
  public textStyle={
  color:'darkorange',
  fontSize:'26px',
  textTransform: 'uppercase'
  }  
}
