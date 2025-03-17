import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {

  constructor() {}

  fetchCsrfToken(): void {
    fetch('http://localhost:8000/api/csrf-token', { credentials: 'include' })
      .then(() => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]');
        if (csrfToken) {
          csrfToken.setAttribute('content', 'retrieved-csrf-token'); // Valeur fictive, Laravel gère la session
        }
      })
      .catch(error => console.error('Erreur lors de la récupération du CSRF token', error));
  }
}
