import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-component',
  standalone: false,
  templateUrl: './binding-event-component.component.html',
  styleUrl: './binding-event-component.component.css'
})
export class BindingEventComponentComponent {
  onClick(event:any){
    alert(event.pointerId)
    }
  onSubmit(value:string){
    alert(value)
    }
  // Phương thức tính toán các phép toán
  result: string = '';  // Biến để lưu kết quả
  calculate(operation: string, num1: string, num2: string): void {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    // Kiểm tra nếu một trong hai giá trị không phải là số
    if (isNaN(a) || isNaN(b)) {
      this.result = 'Please enter valid numbers!';
      return;
    }

    switch (operation) {
      case 'plus':
        this.result = `Result: ${a + b}`;
        break;
      case 'subtract':
        this.result = `Result: ${a - b}`;
        break;
      case 'multiply':
        this.result = `Result: ${a * b}`;
        break;
      case 'divide':
        this.result = b !== 0 ? `Result: ${a / b}` : 'Error: Division by zero!';
        break;
      default:
        return;
    }
  }

  // Phương thức reset các trường dữ liệu
  resetFields(numA: HTMLInputElement, numB: HTMLInputElement, nameInput: HTMLInputElement): void {
    numA.value = '';
    numB.value = '';
    nameInput.value = '';
    this.result = '';  // Xóa kết quả
  }

}
