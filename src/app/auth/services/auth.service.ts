import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/';
  private authTokenSubject: BehaviorSubject<string | null>;

  constructor(private http: HttpClient) {
    this.authTokenSubject = new BehaviorSubject<string | null>(this.getToken());
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.authTokenSubject.next(token);
  }

  clearToken(): void {
    localStorage.removeItem('authToken');
    this.authTokenSubject.next(null);
  }

  get authToken$(): Observable<string | null> {
    return this.authTokenSubject.asObservable();
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}api/auth/login/`, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          const authToken = response.token;
          this.setToken(authToken);
        })
      );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}api/auth/register/`, {
      username,
      email,
      password,
    });
  }

  logout(): void {
    this.clearToken();
  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    const authToken = this.getToken();
    return !!authToken; // Returns true if authToken is not null or undefined
  }
}
