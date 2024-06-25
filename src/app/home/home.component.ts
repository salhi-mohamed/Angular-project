import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  image: string = 'assets/definir-objectifs.jpg'; // Assuming you have an image path

  constructor(private router: Router) {}

  navigate(route: string) {
    this.router.navigate([route]);
  }
  scroll(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
