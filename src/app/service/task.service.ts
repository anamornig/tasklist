import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Task} from '../task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = ' http://localhost:5001/tasks'
  constructor(
    private http:HttpClient
  ) { }
 
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task:Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }
}
