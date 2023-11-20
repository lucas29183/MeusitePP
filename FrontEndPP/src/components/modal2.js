import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from 'react';
import TaskContainer from './TaskContainer'
import AlarmContainer from '../pages/usuário/Components/AlarmContainer';




export default function Modal2({isOpen2, setModalOpen2}) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
    let myTodo = localStorage.getItem('myTodoTasks');
    if (myTodo) {
        setTasks(JSON.parse(myTodo))
    }
    }, [])


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
    
    
    if(isOpen2){


    return(

        <>
       <ModalFundo>
            <AreaModal onSubmit={handleSubmit}> 
            <AlarmContainer />
            {/* <TaskContainer tasks={tasks} setTasks={setTasks} />
   */}
           </AreaModal>
            <BotãoFechar onClick={setModalOpen2}>Fechar</BotãoFechar    > 
       </ModalFundo>

       </>
       )
   }
    
    return null
   }


   const BotãoFechar= styled.button`
    position:fixed;
    background-color:gray;
    border:none;
    border-radius:10px;
    top:0;
    width:5vw;
    height:30px;
    margin-top:395px;
    left:0;
    margin-left:50%;
   `


const AreaModal = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    padding: 150px;
    transform:translate(-50%, -50%);
    background-color: white;
    border-radius: 20px;
    color:black;

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

