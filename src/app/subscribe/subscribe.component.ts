import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckLoginService } from '../check-login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  country: string = "";
  dob: string = "";
  test: boolean = false;

  constructor(private route: Router, private check: CheckLoginService, private userService: UserService) {}

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.country || !this.dob) {
      alert('All fields are required');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(this.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (this.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (this.check.emailExists(this.email)) {
      alert('Email already registered!');
      return;
    }

    this.check.addUser(this.email, this.password);
    this.userService.setUser({
      name: this.name,
      email: this.email,
      dob: this.dob,
      country: this.country
    });
    alert('Sign-up successful!');
    this.test = true;
    this.navigateToHome();
  }

  navigateToHome(): void {
    if (this.test) {
      this.route.navigate(['/profile']);
    }
  }
}
