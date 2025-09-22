import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Board } from './board/board';
import { AuthGuard } from './login/auth.guard';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'boards/:id', component: Board, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Default to register
];