import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { addNewTask, editTask } from 'src/app/store/actions/todo.action';
import { appState } from 'src/app/store/models/appState.model';
import { taskEditMode } from 'src/app/store/selectors/todo.select';

@Component({
  selector: 'app-head-input',
  templateUrl: './head-input.component.html',
  styleUrls: ['./head-input.component.scss']
})
export class HeadInputComponent implements OnInit {
  taskName = ""
  isEditMode = false
  editTaskId = ""
  constructor(private store:Store<appState>) { }

  ngOnInit(): void {
    this.store.select(taskEditMode).subscribe((s) => { 
      if(s.length > 0){
        this.isEditMode = s[0].is_editable
        this.taskName = s[0].taskName
        this.editTaskId = s[0].id
      }else{
        this.isEditMode = false
      }
     })
  }
  confirmInput(){
    // dispatch add a new task to state
    if(this.isEditMode){
      this.store.dispatch(editTask({id:this.editTaskId, newTask:this.taskName}))
    }else{
      const task = {
        id:nanoid(),
        taskName:this.taskName,
        addTime:Date.now().toString(),
        finishTime:'',
        is_deleted:false,
        is_done:false,
        is_editable:false,
      }
      this.store.dispatch(addNewTask({newTask:task}))
    }
    // close editable mode
    this.taskName = ''
  }
}
