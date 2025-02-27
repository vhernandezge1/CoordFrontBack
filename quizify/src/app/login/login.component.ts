import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  // Importation des classes nécessaires
import { AuthService } from '../auth/auth.service';  // Assurez-vous que le chemin est correct
import { CommonModule } from '@angular/common';  // Importation de CommonModule pour *ngIf et autres directives
import { ReactiveFormsModule } from '@angular/forms'; // Pour les formulaires réactifs
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;  // Déclaration du formulaire réactif

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // Création du formulaire réactif avec des validations
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Validation de l'email
      password: ['', [Validators.required, Validators.minLength(6)]]  // Validation du mot de passe
    });
  }

  // Méthode pour l'inscription
  signUp() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signUp(email, password)
        .then(() => console.log('Utilisateur inscrit !'))
        .catch((error) => console.error('Erreur lors de l\'inscription:', error));
    }
  }

  // Méthode pour la connexion
  signIn() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signIn(email, password)
        .then(() => console.log('Utilisateur connecté !'))
        .catch((error) => console.error('Erreur lors de la connexion:', error));
    }
  }

  // Méthode pour la déconnexion
  signOut() {
    this.authService.signOut();
  }

  // Accès aux contrôles du formulaire pour la validation
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
