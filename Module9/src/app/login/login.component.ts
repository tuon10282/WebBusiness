import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  saveLogin: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rememberMe: [false]
    });

    // Load stored login info
    const savedLogin = localStorage.getItem('loginData');
    if (savedLogin) {
      const { email, password } = JSON.parse(savedLogin);
      this.loginForm.patchValue({ email, password, rememberMe: true });
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Invalid email or password!';
      return;
    }

    const loginData = this.loginForm.value;

    // Simulate authentication
    if (loginData.email === 'teacher@example.com' && loginData.password === '12345') {
      if (loginData.rememberMe) {
        localStorage.setItem('loginData', JSON.stringify(loginData));
      } else {
        localStorage.removeItem('loginData');
      }

      this.router.navigate(['/dashboard']); // Điều hướng sau khi đăng nhập thành công
    } else {
      this.errorMessage = 'Invalid credentials!';
    }
  }

}
