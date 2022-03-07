import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/models/appState.model';
import { newTask } from 'src/app/store/models/newTask.model';
import { selectdoneTask } from 'src/app/store/selectors/todo.select';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.scss']
})
export class DoneTaskComponent implements OnInit {
  items:Observable<newTask[]> = new Observable()
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.items = this.store.select(selectdoneTask)
  }

}
