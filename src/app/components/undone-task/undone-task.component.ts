import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/models/appState.model';
import { newTask } from 'src/app/store/models/newTask.model';
import { todoReduce } from 'src/app/store/reducers/todo.reducer';
import { selectUndoneTask } from 'src/app/store/selectors/todo.select';

@Component({
  selector: 'app-undone-task',
  templateUrl: './undone-task.component.html',
  styleUrls: ['./undone-task.component.scss']
})
export class UndoneTaskComponent implements OnInit {
  tasks$:Observable<newTask[]> = new Observable<newTask[]>()
 
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.tasks$ = this.store.select(selectUndoneTask)
  }

}
