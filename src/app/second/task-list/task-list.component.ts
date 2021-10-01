import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { AutoUnsubscribeComponent } from '../../shared/auto-unsubscribe.component';
import { takeUntil } from 'rxjs/operators';
import { Task } from '../../models/Task';

@Component({
  selector: 'od-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent extends AutoUnsubscribeComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private readonly tasksService: TasksService) {
    super();
  }

  ngOnInit(): void {
    this.tasksService.tasks.pipe(takeUntil(this.$destroy)).subscribe(tasks => {
      console.log('this will not leak unlike the listener at third component', tasks);
      this.tasks = tasks;
    });
  }

  markTaskAsDone(t: Task) {
    this.tasksService.markTaskDone(t);
  }
}
