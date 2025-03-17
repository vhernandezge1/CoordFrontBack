import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { CategorieComponent } from './categorie/categorie.component';
import { QuizComponent } from './quiz/quiz.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'quiz/:category', component: QuizComponent },
];
