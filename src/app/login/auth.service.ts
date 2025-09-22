import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.authState.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.authState.next(user);
    });
  }

  register(email: string, password: string, username: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        // Optional: Update user profile with username (requires additional Firebase call)
        // userCredential.user.updateProfile({ displayName: username });
        return userCredential;
      });
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  isLoggedIn(): boolean {
    return !!this.authState.value;
  }

  getCurrentUser(): User | null {
    return this.authState.value;
  }
}