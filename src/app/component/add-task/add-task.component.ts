import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskInterface } from 'src/app/task-interface';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<TaskInterface> = new EventEmitter();

  text: string="";
  time: string="";
  reminder: boolean=false;
  showAddTask:boolean=false;
  subscription:Subscription;
  
  constructor(private uiService: UiService) { 
    this.subscription=this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask=value));
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.time,
      reminder:this.reminder
    }
    this.onAddTask.emit(newTask);

    this.text='';
    this.time='';
    this.reminder= false;
  }
}
