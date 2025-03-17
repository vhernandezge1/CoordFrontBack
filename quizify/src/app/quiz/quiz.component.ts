import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  category: string = '';
  questions = [
    { question: 'Quel est la capitale de la France?', options: ['Paris', 'Londres', 'Madrid'], answer: 'Paris' },
    { question: 'Combien de continents existe-t-il?', options: ['4', '5', '7'], answer: '7' }
  ];
  selectedAnswers: { [key: number]: string } = {};  // Pour stocker les réponses sélectionnées
  score: number = 0;  // Score de l'utilisateur

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
  }

  // Méthode pour sélectionner une réponse
  selectAnswer(questionIndex: number, answer: string) {
    this.selectedAnswers[questionIndex] = answer;  // Sauvegarde de la réponse choisie
  }

  // Méthode pour soumettre le quiz et calculer le score
  submitQuiz() {
    this.score = 0;  // Réinitialiser le score avant le calcul

    // Comparer les réponses sélectionnées avec les bonnes réponses
    this.questions.forEach((question, index) => {
      if (this.selectedAnswers[index] === question.answer) {
        this.score += 1;  // Ajouter 1 point pour chaque bonne réponse
      }
    });

    alert(`Votre score est : ${this.score} / ${this.questions.length}`);
  }
}
