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
  test:boolean=false
  country:string="";
 dob: string = ''
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

   

    alert('Sign-up successful!');
    this.test=true
    // Handle actual sign-up logic here
  }
  write(userform:NgForm ):void
  {
    console.log(userform.value.name)
  }
  navigateToHome():void
  {
    if (this.test==true){
      this.route.navigate(['/home'])
    }
   
  }
}