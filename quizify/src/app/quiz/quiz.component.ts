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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    });
  }

  selectAnswer(questionIndex: number, answer: string) {
    this.selectedAnswers[questionIndex] = answer;
  }

  submitQuiz() {
    alert('Quiz soumis! Vos réponses sont : ' + JSON.stringify(this.selectedAnswers));
  }
}
