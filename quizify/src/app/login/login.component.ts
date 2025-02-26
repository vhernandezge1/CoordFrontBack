import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';  // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService) {}

  signUp(email: HTMLInputElement, password: HTMLInputElement) {
    const userEmail = email.value;
    const userPassword = password.value;

    this.authService.signUp(userEmail, userPassword)
      .then(() => console.log('Utilisateur inscrit !'))
      .catch((error) => console.error('Erreur lors de l\'inscription:', error));
  }

  signIn() {
    // Récupère les valeurs des champs d'email et password via les références locales
    const email = document.querySelector('#email') as HTMLInputElement;
    const password = document.querySelector('#password') as HTMLInputElement;

    const userEmail = email.value;
    const userPassword = password.value;

    this.authService.signIn(userEmail, userPassword)
      .then(() => console.log('Utilisateur connecté !'))
      .catch((error) => console.error('Erreur lors de la connexion:', error));
  }

  signOut() {
    this.authService.signOut();
  }
}
