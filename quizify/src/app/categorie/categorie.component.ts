import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  imports:[CommonModule,RouterModule]
})
export class CategorieComponent {
  categories = ['Mathématiques', 'Histoire', 'Géographie', 'Sciences'];

  constructor(private router: Router) {}

  // Naviguer vers la page du quiz de la catégorie sélectionnée
  navigateToQuiz(category: string) {
    this.router.navigate(['/quiz', category]);  // Redirige vers le quiz correspondant
  }
}
