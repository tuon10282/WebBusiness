import { Component } from '@angular/core';

@Component({
  selector: 'app-quadratic-model',
  standalone: false,
  templateUrl: './quadratic-model.component.html',
  styleUrl: './quadratic-model.component.css'
})
export class QuadraticModelComponent {
  // Binding 2 way
  public a:string=''
  public b:string=''
  public c: string = '';

  result: string = '';
  findsolution(): void {
    const A = parseFloat(this.a);
    const B = parseFloat(this.b);
    const C = parseFloat(this.c);

    if (isNaN(A) || isNaN(B) || isNaN(C)) {
      this.result = 'Vui lòng nhập số hợp lệ!';
      return;
    }
    const delta = B * B - 4 * A * C;
    if (delta < 0) {
      this.result = 'Phương trình vô nghiệm!';
    } else if (delta === 0) {
      const x = -B / (2 * A);
      this.result = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      const x1 = (-B + Math.sqrt(delta)) / (2 * A);
      const x2 = (-B - Math.sqrt(delta)) / (2 * A);
      this.result = `Phương trình có hai nghiệm: x1 = ${x1}, x2 = ${x2}`;
    }
  }
  resetFields(): void {
    this.a = '';
    this.b = '';
    this.c = '';
    this.result = '';
  }
  
}

