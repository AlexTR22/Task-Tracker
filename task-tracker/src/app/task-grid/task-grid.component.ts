import { Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../Task';
import { CommonModule } from '@angular/common';
import { Status } from '../Status';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatCardModule, CommonModule, TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.css'
})
export class TaskGridComponent {
  @Input() taskList!: Task[];
}

