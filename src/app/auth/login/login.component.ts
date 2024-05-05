import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        this.router.navigate(['/login']);
        this.errorMessage = error.error.message; // Display error message
      }
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
