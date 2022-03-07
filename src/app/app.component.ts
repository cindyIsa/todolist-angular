import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from './store/models/appState.model';
import { newTask } from './store/models/newTask.model';
import { undoneTaskAmount } from './store/selectors/todo.select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todoProject';
  undoneAmount$:number = 0
  constructor(private store:Store<appState>){}
  ngOnInit(): void {
    
    this.store.select(undoneTaskAmount).subscribe(
      s => this.undoneAmount$ = s
    )
    
  }
}
