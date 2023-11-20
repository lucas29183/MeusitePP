import React from 'react'
import './Task.css'
import { MdCancel, MdDoneAll } from 'react-icons/md'

const Task = ({ task, tasks, setTasks, index, dark }) => {

    const handleComplete = (e) => {
        e.preventDefault()
        let newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const saveToLocal = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data));
    }
    const handleRemove = (e) => {
        e.preventDefault()
        let newTasks = [...tasks];
        newTasks.splice(index, 1)
        setTasks(newTasks)
        saveToLocal("myTodoTask", newTasks);
    }

    return (
        <div className= {`box-task-container`}>


            {/* titulo da tarefa */}

            <div className={`box-task`}>
                <div className={`box-task-title`} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}</div>



                {/* descrição da tarefa */}
                
                <div className={`box-task-description`} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.description}</div>
            </div>


                {/* botão concluir tarefa */}

            <div className={`${dark ? 'darkMode' : "lightMode"} box-task-action`}>
                <button className={`${dark ? 'darkMode-task-completed' : "lightMode-task-completed"} box-task-completed ${dark ? 'darkMode-task-btn' : "lightMode-task-btn"} box-task-btn`} 
                onClick={handleComplete}>
                <MdDoneAll size={20}/>
                </button>



                {/* botão cancelar tarefa */}

                <button className={`${dark ? 'darkMode-task-remove' : "lightMode-task-remove"} box-task-remove ${dark ? 'darkMode-task-btn' : "lightMode-task-btn"} box-task-btn`} 
                onClick={(e) => handleRemove(e)}>
                <MdCancel size={20}/>
                </button>
            </div>
        </div>)
}

export default Task








