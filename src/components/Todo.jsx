import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import AddTodo from './AddTodo';
import {addTodo, deleteaTodo, getTodos, toggleTodoStatus} from './api';
import TodoItem from './TodoItem';

const Todo = () => {
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false);
    const [error, setError]= useState(false);

    useEffect(()=>{
       handleGetTodos()
    },[]);

    function handleGetTodos(){
        setLoading(true);
        setError(false);
        getTodos()
        .then((res)=>{
            setData(res.data);
            
            setLoading(false);
        })
        .catch((err)=>{
            setLoading(false);
            setError(true);
        })
    }

    function handleAdd(title){
        setLoading(true);
        addTodo({
            title,
            status:false
        }).then(()=>handleGetTodos())
    }

    function handleToggle(id, newStatus){
        setLoading(true);
        toggleTodoStatus({id, newStatus}).then(()=>handleGetTodos());
    }

    const handleDelete=(id)=>{
        setLoading(true);
        deleteaTodo(id)
        .then(()=>{
            handleGetTodos();
        })
    }
  return (
    <div>
        <h1>Todo App</h1>
        {loading && <div>...loading</div>}
        {error && <div>...error</div>}
        <AddTodo handleAdd={handleAdd} />
        <br />
        <div>
            {data.map((item)=>(
                <TodoItem key={item.id} id={item.id} title={item.title} handleDelete={handleDelete} handleToggle={handleToggle} status={item.status}/>
            ))}
        </div>
    </div>
  )
}

export default Todo