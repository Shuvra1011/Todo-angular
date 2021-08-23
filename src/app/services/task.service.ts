import { Injectable } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaderResponse, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  
  constructor(private http:HttpClient) { }

  getTask():Observable<TaskInterface[]>{
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTask(task:TaskInterface):Observable<TaskInterface>{
    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url)
  }

  updateTaskReminder(task:TaskInterface):Observable<TaskInterface>{
    const url =  `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

  addTask(task:TaskInterface):Observable<TaskInterface>{
    return this.http.post<TaskInterface>(this.apiUrl, task, httpOptions);
  }
}
