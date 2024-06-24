import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
  constructor(private route:Router){}
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  onSubmit() {
    if (!this.name || !this.email || !this.password || !this.confirmPassword) {
      alert('All fields are required');
      return;
    }
    if (this.password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

   

    alert('Sign-up successful!');
    // Handle actual sign-up logic here
  }
  write(userform:NgForm ):void
  {
    console.log(userform.value.name)
  }
  navigateToHome():void
  {
    this.route.navigate(['/home'])
  }
}