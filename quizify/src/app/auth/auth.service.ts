import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  // Cela garantit que le service est disponible dans toute l'application
})
export class AuthService {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  signIn(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  signOut() {
    return signOut(getAuth()).then(() => {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn() {
    return this.afAuth.authState;
  }
}
