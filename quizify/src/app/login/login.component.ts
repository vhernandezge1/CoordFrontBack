import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { isPlatformBrowser } from '@angular/common';  // Importer isPlatformBrowser pour vérifier si on est dans le navigateur
import { PLATFORM_ID } from '@angular/core';  // Importer PLATFORM_ID pour l'injection

@Component({
  selector: 'app-login',
  standalone: true,  // Si tu utilises un composant autonome
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  csrfToken: string = '';

  // Injection de FormBuilder et PLATFORM_ID pour vérifier l'environnement
  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    @Inject(PLATFORM_ID) private platformId: Object  // Injecter PLATFORM_ID pour vérifier la plateforme
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // Vérifier si on est dans un environnement navigateur avant d'utiliser document
    if (isPlatformBrowser(this.platformId)) {
      const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
      this.csrfToken = csrfMetaTag ? csrfMetaTag.getAttribute('content') || '' : '';
  
      // Afficher le CSRF token dans la console pour vérifier
      console.log('CSRF Token récupéré:', this.csrfToken);  // Affiche le token dans la console
    }
  }

  

  signUp() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signUp(email, password, this.csrfToken)
        .then(() => console.log('Utilisateur inscrit !'))
        .catch((error) => console.error('Erreur lors de l\'inscription:', error));
    }
  }

  signIn() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.signIn(email, password, this.csrfToken)
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
