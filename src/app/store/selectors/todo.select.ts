import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appState } from "../models/appState.model";
import { newTask } from "../models/newTask.model";

export const undoneTaskAmount = createSelector(
    (state:appState) => state.todo ,
    (state) =>{
        // console.log(state.filter(s =>  !s.status ))
        return state.filter(s =>  !s.is_done && !s.is_deleted ).length
    }
)

export const selectUndoneTask = createSelector(
    (state:appState) => state.todo,
    (state) => { 
        // console.log(state)
        return state.filter(s =>  !s.is_done && !s.is_deleted)
     }
)
export const doneTaskAmount = createSelector(
    (state:appState) => state.todo ,
    (state) =>{
        // console.log(state.filter(s =>  !s.status ))
        return state.filter(s =>  s.is_done ).length
    }
)

export const selectdoneTask = createSelector(
    (state:appState) => state.todo,
    (state) => { 
        // console.log(state)
        return state.filter(s =>  s.is_done && !s.is_deleted)
     }
)

export const taskEditMode = createSelector(
    (state:appState) => state.todo,
    (state) => {
        return state.filter(s =>  s.is_editable )
    }
)
