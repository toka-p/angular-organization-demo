import { Observable, ReplaySubject } from 'rxjs';
import { Task } from '../../models/Task';
import { take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private _tasksSubject: ReplaySubject<Task[]> = new ReplaySubject<Task[]>(1);

  public get tasks(): Observable<Task[]> {
    return this._tasksSubject.asObservable();
  }

  constructor() {
    this._tasksSubject.next([]);
  }

  addTask(task: Task) {
    console.log('Adding new task', task);
    this._tasksSubject.pipe(take(1)).subscribe(tasks => {
      const newList = [...tasks, task];
      console.log('New list', newList);
      this._tasksSubject.next(newList);
    });
  }

  markTaskDone(t: Task) {
    console.log(`Marking task ${t.id} as done`);
    this._tasksSubject.pipe(take(1)).subscribe(tasks => {
      const task = tasks.find(x => x.id === t.id);

      if (!task) {
        return;
      }

      task.done = true;

      tasks[tasks.indexOf(t)] = task;
      this._tasksSubject.next(tasks);
    });
  }
}
