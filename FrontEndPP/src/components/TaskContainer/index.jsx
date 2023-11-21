import React, { useState } from 'react'
import Task from '../Task'
import './TaskContainer.css'
import styled from "styled-components";


const TaskContainer = ({ tasks, setTasks }) => {

    const [todo, setTodo] = useState({ completed: false, title: "", description: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.title) {
            let newTask = { ...todo }
            let newTasks = [...tasks, newTask]
            setTasks(newTasks)
            setTodo({ title: '', description: '', completed: false })
            localStorage.setItem("myTodoTasks", JSON.stringify(newTasks));
        }
    }

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value })
    }

    return (
        <div className='tasks-container'>
            <form className='input-form' action='handleSubmit' onSubmit={handleSubmit}>
               
                <Textocima>Coloque o título da atividade</Textocima>
                <input className='task-input task-input-title'
                    name='title' type="text" placeholder='Enter Title'
                    onChange={handleChange} value={todo.title} />
               

               <Textocima>Coloque a descrição da atividade</Textocima>
                <input className='task-input task-input-desc'
                    name='description' type="text" placeholder='Enter Description'
                    onChange={handleChange} value={todo.description} />


                <button className={`task-btn add-btn`}
                    type='submit'>Add</button>
            </form >


        </div>
    )
}

export default TaskContainer;

const Textocima = styled.p`
    margin-bottom:5px;
`