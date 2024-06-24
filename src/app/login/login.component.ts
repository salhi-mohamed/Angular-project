import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private route: Router) {}

  email: string = "";
  password: string = "";
  test1: boolean = false;
  test2: boolean = false;
  test3: boolean = false;
  passwordStrength: string = '';

  onLogin() {
    if (!this.email || !this.password) {
      alert('All fields are required');
      return; // Stop further execution
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.email)) {
      alert('Please enter a valid email address');
      return;
    }

    alert('Login successful!');
    this.test1 = true;
    this.test2 = true;
    this.test3 = true;
  }

  GoToHome() {
    if (this.test1 && this.test2 && this.test3) {
      this.route.navigate(['/home']);
    }
  }

  onPasswordInput() {
    this.passwordStrength = this.getPasswordStrength(this.password);
  }

  getPasswordStrength(password: string): string {
    if (password.length < 8) {
      return 'weak';
    }

    let strength = 0;
    if (/[a-z]/.test(password)) {
      strength++;
    }
    if (/[A-Z]/.test(password)) {
      strength++;
    }
    if (/\d/.test(password)) {
      strength++;
    }
    if (/[@$!%*?&#]/.test(password)) {
      strength++;
    }

    if (strength === 1) {
      return 'weak';
    } else if (strength === 2) {
      return 'medium';
    } else if (strength >= 3) {
      return 'strong';
    }
    return 'weak';
  }
}
