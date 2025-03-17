import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Pour gérer l'authentification Firebase
import { HttpClient } from '@angular/common/http';  // Pour envoyer des requêtes HTTP
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {}

  // Méthode pour récupérer le token d'authentification Firebase
  getToken(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.afAuth.currentUser
        .then((user) => {
          if (user) {
            user
              .getIdToken()
              .then((token) => {
                resolve(token);
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            reject('No user is logged in');
          }
        })
        .catch((error) => reject(error));
    });
  }

  // Méthode pour inscrire un utilisateur
  signUp(email: string, password: string, csrfToken: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Une fois l'utilisateur inscrit, envoyer le token Firebase au backend avec le CSRF token
        return this.getToken().then((token) => {
          return this.sendTokenToBackend(token, csrfToken);
        });
      })
      .catch((error) => {
        console.error('Erreur lors de l\'inscription:', error);
        throw error;
      });
  }

  // Méthode pour connecter un utilisateur
  signIn(email: string, password: string, csrfToken: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        // Une fois l'utilisateur connecté, envoyer le token Firebase au backend avec le CSRF token
        return this.getToken().then((token) => {
          return this.sendTokenToBackend(token, csrfToken);
        });
      })
      .catch((error) => {
        console.error('Erreur lors de la connexion:', error);
        throw error;
      });
  }

  // Exemple de méthode pour envoyer le token au backend avec CSRF token
  sendTokenToBackend(token: string, csrfToken: string): Promise<any> {
    const apiUrl = 'http://localhost:8000/api/login';  // Ton URL backend

    return fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Ajout du token Firebase dans l'en-tête Authorization
        'X-CSRF-TOKEN': csrfToken  // Ajout du CSRF token dans l'en-tête X-CSRF-TOKEN
      },
      credentials:'include',
      body: JSON.stringify({ token })  // Corps de la requête avec le token
    })
      .then((response) => response.json())  // Convertir la réponse en JSON
      .then((data) => {
        console.log('Réponse du backend:', data);
        return data;
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi du token au backend', error);
        throw error;
      });
  }

  // Déconnexion de l'utilisateur
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}
