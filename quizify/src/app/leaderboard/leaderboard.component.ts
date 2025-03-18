import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css'],
  imports:[CommonModule,RouterModule]
})
export class LeaderboardComponent {
  leaderboard = [
    { name: 'Alice', score: 120 },
    { name: 'Bob', score: 100 },
    { name: 'Charlie', score: 80 },
    { name: 'David', score: 150 },
    { name: 'Eve', score: 95 },
  ];

  // Fonction pour trier les joueurs par score (du plus élevé au plus bas)
  sortLeaderboard() {
    this.leaderboard.sort((a, b) => b.score - a.score); // Tri des scores
  }

  // Appel de la fonction de tri lors du chargement du composant
  ngOnInit() {
    this.sortLeaderboard(); // Trie les joueurs dès que le composant est initialisé
  }
}
