import { Action, createAction, props } from "@ngrx/store";
import { newTask } from "../models/newTask.model";

export const addNewTask = createAction(
    "[todo] add new task",
    props<{newTask:newTask}>()
)
export const deleteTask = createAction(
    "[todo] remove a task by id",
    props<{id:string}>()
)
export const registerTask = createAction(
    "[todo] change a status of task (done or undone) by id",
    props<{id:string,time:number}>()
)
export const editTask = createAction(
    "[todo] edit the task by id",
    props<{id:string, newTask: string}>()
)
export const changeTaskEditable = createAction(
    "[todo] triggle the task item editable status", 
    props<{ id:string }>()
)