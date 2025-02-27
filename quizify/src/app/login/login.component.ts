import { Component } from '@angular/core';  // Importation du décorateur Component
import { CommonModule } from '@angular/common';  // Pour utiliser *ngIf et autres directives
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importation des classes nécessaires
import { AuthService } from '../auth/auth.service';  // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-login',
  standalone: true,  // Si tu utilises un composant autonome
  imports: [CommonModule, ReactiveFormsModule],  // Ajoute CommonModule et ReactiveFormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  // Injection de FormBuilder dans le constructeur
  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Initialisation du formulaire réactif avec des validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signUp(email, password)
        .then(() => console.log('Utilisateur inscrit !'))
        .catch((error) => console.error('Erreur lors de l\'inscription:', error));
    }
  }

  signIn() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signIn(email, password)
        .then(() => console.log('Utilisateur connecté !'))
        .catch((error) => console.error('Erreur lors de la connexion:', error));
    }
  }

  signOut() {
    this.authService.signOut();
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
