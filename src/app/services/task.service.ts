import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private URL = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  // Method to get tasks with Authorization header
  getTasks() {
    const headers = this.createAuthorizationHeader();
    return this.http.get(this.URL, { headers }).pipe(
      catchError((error) => {
        if (error.error instanceof SyntaxError) {
          return throwError(() => new Error('Invalid JSON response from server'));
        }
        return throwError(() => error);
      })
    );
  }

  // Method to create a task with Authorization header
  createTask(task: any) {
    const headers = this.createAuthorizationHeader();
    return this.http.post(this.URL, task, { headers });
  }

  // Method to update a task with Authorization header
  updateTask(id: string, task: any) {
    const headers = this.createAuthorizationHeader();
    return this.http.put(`${this.URL}/${id}`, task, { headers });
  }

  // Method to delete a task with Authorization header
  deleteTask(id: string) {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(`${this.URL}/${id}`, { headers });
  }

  // Helper method to create Authorization header
  private createAuthorizationHeader() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders({ 'Authorization': `Bearer ${token}` }) : new HttpHeaders();
  }
}
