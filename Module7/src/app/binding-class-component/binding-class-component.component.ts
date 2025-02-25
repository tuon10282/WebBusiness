import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  standalone: false,
  templateUrl: './binding-class-component.component.html',
  styleUrl: './binding-class-component.component.css'
})
export class BindingClassComponentComponent {
  public success="text-success"
  public error="text-error"
  public primary="text-primary"
  public normal="text-normal"
  public multiClass={
  "text-primary":true,
  "text-normal":true,
  "text-error":true
}
}
