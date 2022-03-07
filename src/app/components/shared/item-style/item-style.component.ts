import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeTaskEditable, deleteTask, registerTask } from 'src/app/store/actions/todo.action';

@Component({
  selector: 'app-item-style',
  templateUrl: './item-style.component.html',
  styleUrls: ['./item-style.component.scss']
})
export class ItemStyleComponent implements OnInit {
  @Input() item:any
  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  registerTask(){
    const finishTime = Date.now()
    // dispatch store to change the task to finished status
    this.store.dispatch(registerTask({id:this.item.id, time:finishTime}))

  }
  editTask(id:string){
    this.store.dispatch(changeTaskEditable({id:id}))
    // this.store.dispatch(getCurrentTask({currentTask:this.item.taskName}))
  }
  deleteTask(id:string){
    this.store.dispatch(deleteTask({id:id}))
  }
  cancelEditMode(){
    this.store.dispatch(changeTaskEditable({id:''}))
  }

}
