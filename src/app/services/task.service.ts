import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private URL = 'http://localhost:5000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get(this.URL);
  }

  createTask(task: any) {
    return this.http.post(this.URL, task);
  }

  updateTask(id: string, task: any) {
    return this.http.put(`${this.URL}/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}