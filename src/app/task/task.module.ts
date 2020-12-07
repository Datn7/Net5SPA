import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TaskComponent } from './task.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, HttpClientModule,FormsModule],
  exports: [HttpClientModule, TaskComponent],
})
export class TaskModule {}
