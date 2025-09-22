import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email: string = '';
  name: string = '';
  password: string = '';
  confirmPassword: string = ''; // Added for confirm password field
  passwordMismatch: boolean = false; // Added for mismatch validation
  error: string | null = null;
  loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    this.loading = true;
    this.error = null;
    this.passwordMismatch = false;

    // Check if passwords match before Firebase call
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      this.loading = false;
      return;
    }

    try {
      await this.authService.register(this.email, this.password, this.name);
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      this.error = err.message || 'Registration failed';
    } finally {
      this.loading = false;
    }
  }
}