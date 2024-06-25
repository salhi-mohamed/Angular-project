import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-other',
  templateUrl: './home-other.component.html',
  styleUrl: './home-other.component.css'
})
export class HomeOtherComponent {
  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }

}
