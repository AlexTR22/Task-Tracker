import { Component, Input } from '@angular/core';
import { Task } from '../Task';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
@Input() task!: Task;
}
