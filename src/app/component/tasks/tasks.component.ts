import { Component, OnInit, Input, Output } from '@angular/core';
import { TaskInterface } from 'src/app/task-interface';
import { TaskService } from 'src/app/services/task.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = [];


  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>this.tasks = tasks);

  }

  deleteTask(task: TaskInterface){
    this.taskService.deleteTask(task).subscribe(()=>this.tasks = this.tasks.filter(t=>t.id !== task.id));
  }
  toggleReminder(task: TaskInterface){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
