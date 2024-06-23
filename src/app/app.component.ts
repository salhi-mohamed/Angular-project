import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Utilisation de styleUrls pour spécifier le fichier CSS
})
export class AppComponent {
  title = 'tracker';

  constructor(private router: Router) { } // Correction du nom de la variable et de l'importation

  navigate(): void {
    this.router.navigate(['/subscribe']); // Utilisation de chaînes de caractères et de crochets autour de 'signup'
  }
}
