import React, { useState } from 'react'
import './TaskContainer.css'
import Task from '../Task'
import styled from "styled-components";

const TaskContainer = ({ tasks, setTasks, dark }) => {

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
        <ModalFundo>
            <AreaModal onSubmit={handleSubmit}> 
                
                
                <TextoLabel>Titulo da atividade</TextoLabel>
                <Input
                    name='title'
                    type="text" 
                    placeholder='Enter Title'
                    onChange={handleChange} value={todo.title} 
                />

                
                <TextoLabel2> Data</TextoLabel2>
                <Input2 className='task-input task-input-desc'
                    name='description' type="text" placeholder='Enter Description'
                    onChange={handleChange} value={todo.description} />

                

                <DivBotãoSalvar>
                <BotãoSalvar className={`task-btn ${dark ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`}
                    type='submit'><TextoSalvar>Salvar</TextoSalvar>
                </BotãoSalvar>
                </DivBotãoSalvar>
            
            
            </AreaModal >


            {/* <div className={` box-tasks-container`}>
                {tasks?.map((task, i) => {
                    return <Task task={task} tasks={tasks} setTasks={setTasks} index={i} key={i} />
                })}
            </div> */}


        </ModalFundo>
    )
}

export default TaskContainer



const DivBotãoSalvar = styled.div`
    display:flex;
`

const BotãoSalvar = styled.button`
    position:fixed;    
    text-align:center;
    justify-content:center;
    background-color:aqua;
    border:none;
    border-radius:10px;
    top:0;
    width:5vw;
    height:30px;
    margin-top:260px;
    left:0;
    margin-left:74%;
`

const TextoSalvar = styled.p`
    margin-bottom:20px;
`


const TextoLabel2 = styled.p`
    position: absolute;
    font-size: 15px;
    top:0;
    margin-top:80px;
    left:0;
    margin-left: 30px;
`



const Input2 = styled.input`
    position: fixed;
    background-color:gray;
    color:black;
    opacity: 15%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width:20vw;
    height:5vh;
    border:0;
    border-bottom:0.1;
    border-radius:10px;
    font-size: 15px;
    top:0;
    margin-top:110px;
    left:0;
    margin-left: 10px;
`


const Input = styled.input`
    position: fixed;
    background-color:gray;
    opacity: 15%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width:20vw;
    height:5vh;
    border:0;
    border-bottom:0.1;
    border-radius:10px;
    font-size: 15px;
    top:0;
    margin-top:50px;
    left:0;
    margin-left: 10px;
`


const AreaModal = styled.form`
    position:fixed;
    display:flex;
    top:50%;
    left:50%;
    padding: 150px;
    transform:translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    color:black;
    max-width:30vw;
    max-height:60vh;

`


const ModalFundo = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb( 0, 0, 0, 0.7);
    z-index: 1000;
`

const TextoLabel = styled.p`
    position: absolute;
    font-size: 15px;
    top:0;
    margin-top:20px;
    left:0;
    margin-left: 30px;
`