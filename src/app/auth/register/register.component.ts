// register.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username!: string;
  email!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService
      .register(this.username, this.email, this.password)
      .subscribe(
        (response) => {
          // Registration successful, redirect to login page
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = error.error.message; // Display error message
        }
      );
  }
}
