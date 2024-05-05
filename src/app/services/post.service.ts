import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://localhost:8000/api/';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Token ${localStorage.getItem('authToken')}`,
  });

  constructor(private http: HttpClient) {}

  getDashboardPosts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}dashboard/`, {
      headers: this.httpHeaders,
    });
  }
}
