import React from 'react'
import './Task.css'
import { MdCancel, MdDoneAll } from 'react-icons/md'

const Task = ({ task, tasks, setTasks, index }) => {

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
        <div className={`box-task-container`}>
            <div className={`box-task`}>


                <div className={`box-task-title`} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}</div>



                <div className={` box-task-description`} style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.description}</div>
            </div>



            <div className={`box-task-action`}>
                <button className={`box-task-completedbox-task-btn`} onClick={handleComplete}><MdDoneAll size={20} /></button>
                <button className={` box-task-removebox-task-btn`} onClick={(e) => handleRemove(e)}><MdCancel size={20} /></button>
            </div>
        </div>)
}

export default Task