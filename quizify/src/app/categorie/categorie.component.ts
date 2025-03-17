import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importer Router pour naviguer programmatique

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  categories = ['Mathématiques', 'Histoire', 'Géographie', 'Sciences'];

  constructor(private router: Router) {}

  // Méthode pour naviguer vers le quiz d'une catégorie
  navigateToQuiz(category: string) {
    this.router.navigate(['/quiz', category]);  // Redirection vers /quiz/:category
  }
}
