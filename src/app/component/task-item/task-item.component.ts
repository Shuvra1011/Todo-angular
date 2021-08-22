import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/task-interface';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: TaskInterface = {
    id: null,
    text: '',
    day: '',
    reminder: null,
  } 
  @Output() onDeleteTask: EventEmitter<TaskInterface> = new EventEmitter;
  @Output() onToggleReminder: EventEmitter<TaskInterface> = new EventEmitter;
  // faTimes=faTimes
  constructor() { 
  
  }
  ngOnInit(): void {
  }
  onDelete(task:TaskInterface){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:TaskInterface){
    this.onToggleReminder.emit(task);
  }

}
