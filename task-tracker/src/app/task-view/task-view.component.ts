import { Component } from '@angular/core';
import { TaskGridComponent } from "../task-grid/task-grid.component";
import { Task } from '../Task';
import { Status } from '../Status';
@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent],
  templateUrl: './task-view.component.html',
  styleUrl: './task-view.component.css'
})
export class TasksViewComponent {
  taskList: Task[] =[ {
    id: '1',
    title: 'Tema 1', 
    description: 'Tema DAW',
    status: Status.ToDo,
  },
  { 
    id: '2',
    title: 'Proiect mare', 
    description: 'Da',
    status: Status.InProgress,
  }]; 
}
