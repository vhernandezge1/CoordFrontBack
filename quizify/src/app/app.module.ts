import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';  
import { environment } from '../environments/environment'; 

import { RouterModule } from '@angular/router';  // Correctement importé pour routerLink
import { appRoutes } from './app.routes';        // Vos routes définies ici
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Pour gérer les formulaires
import { LoginComponent } from './login/login.component';

import { CategorieComponent } from './categorie/categorie.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategorieComponent,
    LeaderboardComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),  // Bien importé pour routerLink
    FormsModule,  // Pour gérer les formulaires
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
