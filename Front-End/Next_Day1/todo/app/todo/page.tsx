
"use client"
import { useContext,useReducer,useState } from 'react'
import { todoListContext } from '../todoListContext'

function Todo() {


    const todoList = useContext(todoListContext)
    const tasksFromTodoListContext = todoList.map((e,i)=>{
        return(
            <div className="todo bg-[#FFEA6C] text-[#555]"key={i}>
                <p>{e}</p>
            </div>  
        )
    })
  return (
    <div className='container flex flex-col justify-center items-center bg-[#FFA6FB] w-[50%] mx-auto p-7 text-[#fff] rounded-2xl'>
        <form onSubmit={(e)=>{e.preventDefault}}>
            <div className='flex flex-col w-[70%]'>
                <label htmlFor="task">Enter The Task:</label>
                <input className='w-full' type='text' id="task"placeholder='Task...'></input>
            </div>
            <button onClick={()=>{
                const form = new FormData();
                form.append
            }}>Add</button>
        </form>
        {tasksFromTodoListContext}
    </div>
  )
}

export default Todo