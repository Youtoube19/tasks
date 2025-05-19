import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private URL = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    return this.http.post(`${this.URL}/register`, user, { observe: 'response' }).pipe(
      map((response) => response.body)
    );
  }

  login(user: any) {
    return this.http.post<{ token: string }>(`${this.URL}/login`, user, { observe: 'response' }).pipe(
      map((response) => response.body)
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
