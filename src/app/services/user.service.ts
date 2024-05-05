import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8000/api/';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('authToken')}`,
  });

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}current_user/`, {
      headers: this.httpHeaders,
    });
  }
}
