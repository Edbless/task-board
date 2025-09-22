import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email: string = '';
  password: string = '';
  error: string | null = null;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.loading = true;
    this.error = null;
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error = err.message || 'Login failed';
    } finally {
      this.loading = false;
    }
  }
}