import { Action, createReducer, on } from "@ngrx/store";
import { addNewTask, changeTaskEditable, deleteTask, editTask, registerTask } from "../actions/todo.action";
import { newTask } from "../models/newTask.model";


const initialState:newTask[] = [{
    id:"String",
    taskName:"string",
    addTime:"1645647240758",
    finishTime:"1645647240758",
    is_deleted:false,
    is_done:false,
    is_editable:false,
}]

export const todoReduce = createReducer(
    initialState,
    on(addNewTask,(state, {newTask}) =>{
        return [...state,newTask]
    }),
    on(registerTask,(state,{id,time})=>{
        const newState:newTask[] = [];
        state.map((s) => { 
            if(s.id == id){
                newState.push({...s,is_done:true,finishTime:time.toString()})
            }else{
                newState.push(s)
            }
           
         })
        
        // console.log(newState)
        return newState
    }),
    on(editTask,(state,{id,newTask})=>{
        const newState:newTask[] = []
        state.map((s) => { 
            if(s.id == id){
                newState.push({...s, taskName:newTask, is_editable:false})
            }
            else{
                newState.push({...s,is_editable:false})
            }
         })
         return newState
    }),
    on(changeTaskEditable, (state, {id}) => {
        const newState:newTask[] = [];
        state.map((s) => { 
            if(s.id == id){
                newState.push({...s, is_editable:true})
            }else{
                newState.push({...s, is_editable:false})
            }
         })
         return newState
         
    }),
    on(deleteTask,(state,{id})=>{
        const newState:newTask[] =[]
        state.map(s => {
            s.id == id ? newState.push({...s,is_deleted : true})
                        : newState.push(s)
        })
        return newState
    })

)