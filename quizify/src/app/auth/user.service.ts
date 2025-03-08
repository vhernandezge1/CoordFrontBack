import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  
  // Rendre 'users' public pour qu'il soit accessible dans le composant
  public users = signal<User[]>([]);  // Utilisation de signal pour stocker les utilisateurs
  readonly url = 'https://jsonplaceholder.typicode.com/users';  // URL de l'API

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => this.users.set(users))  // Mettre à jour la liste des utilisateurs
    );
  }
}
