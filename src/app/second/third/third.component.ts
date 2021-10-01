import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../core/services/tasks.service';

@Component({
  selector: 'od-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  form: FormGroup;

  constructor(fb: FormBuilder, private readonly tasksService: TasksService) {
    this.form = fb.group({
      id: [-1],
      title: ['', [Validators.required]],
      done: [false, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.tasksService.tasks.subscribe(tasks => {
      console.log('This is leaky', tasks);
      this.form.controls.id.setValue(tasks.length + 1);
    });
  }

  onSubmit() {
    console.log('Form submitted');
    const task = this.form.value;
    this.tasksService.addTask(task);
  }
}
