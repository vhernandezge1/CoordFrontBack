import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  imports:[CommonModule]
})
export class QuizComponent implements OnInit {
  category: string = '';
  questions: { question: string, options: string[], answer: string }[] = [];
  selectedAnswers: { [key: number]: string } = {};  // Pour stocker les réponses sélectionnées
  score: number = 0;  // Score de l'utilisateur

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer la catégorie de la route (paramètre)
    this.route.params.subscribe(params => {
      this.category = params['category'];  // La catégorie est récupérée depuis l'URL
      this.loadQuestions();  // Charger les questions après avoir récupéré la catégorie
    });
  }

  // Charger les questions en fonction de la catégorie
  loadQuestions() {
    if (this.category === 'Mathématiques') {
      this.questions = [
        { question: 'Combien fait 2 + 2 ?', options: ['3', '4', '5'], answer: '4' },
        { question: 'Combien de côtés a un carré ?', options: ['3', '4', '5'], answer: '4' }
      ];
    } else if (this.category === 'Histoire') {
      this.questions = [
        { question: 'Qui a découvert l\'Amérique ?', options: ['Colomb', 'Magellan', 'Vasco da Gama'], answer: 'Colomb' },
        { question: 'En quelle année a eu lieu la Révolution française ?', options: ['1789', '1799', '1804'], answer: '1789' }
      ];
    } else if (this.category === 'Géographie') {
      this.questions = [
        { question: 'Quelle est la capitale de la France ?', options: ['Berlin', 'Paris', 'Madrid'], answer: 'Paris' },
        { question: 'Quel est le plus grand désert du monde ?', options: ['Sahara', 'Gobi', 'Kalahari'], answer: 'Sahara' }
      ];
    } else if (this.category === 'Sciences') {
      this.questions = [
        { question: 'Quel est l\'élément chimique dont le symbole est H ?', options: ['Hydrogène', 'Oxygène', 'Carbone'], answer: 'Hydrogène' },
        { question: 'Quelle planète est la plus proche du Soleil ?', options: ['Mercure', 'Venus', 'Terre'], answer: 'Mercure' }
      ];
    }
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
