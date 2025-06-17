import {Injectable} from '@angular/core'
@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: { id: string, role: 'admin' | 'stagiaire' } | null = null;

  login(email: string, password: string, role: 'admin' | 'stagiaire') {
    this.currentUser = {
      id: '123',
      role: role 
    };
  }

  logout() {
    this.currentUser = null;
  }

  isConnected(): boolean {
    return this.currentUser !== null;
  }

  isStagiaire(): boolean {
    return this.currentUser?.role === 'stagiaire';
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
}
