import { Component, OnInit } from '@angular/core';
import { ITask } from './task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  tasks: any;
  content: any;
  constructor(private _taskSrvc: TaskService) {}

  ngOnInit(): void {
    this.getTasksM();
  }

  getTasksM() {
    this._taskSrvc.getTasks().subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }

  postTaskM() {
    let task = new ITask();
    task.content = this.content;

    if (task.content) {
      this._taskSrvc.postTaks(task);
    }

    setTimeout(() => {
      this.getTasksM();
    }, 1000);
  }

  deleteTaskM(id) {
    this._taskSrvc.deleteTask(id);
    setTimeout(() => {
      this.getTasksM();
    }, 1000);
  }
}
