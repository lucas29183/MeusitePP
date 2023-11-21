
// import styled from "styled-components"; 
import '../../App.css';
import { useState, useEffect } from 'react';

import TaskContainer from "../../components/TaskContainer/index.jsx";


function Usuario() {

  const [tasks, setTasks] = useState([])
  
  useEffect(() => {
    let myTodo = localStorage.getItem('myTodoTasks');
    if (myTodo) {
        setTasks(JSON.parse(myTodo))
    }
}, [])



  return (
    <>



        <TaskContainer tasks={tasks} setTasks={setTasks}/>


    </>
  );

}

export default Usuario;


















// const BodyHome = styled.body`
//     font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     justify-content: center;
//     align-items:center;
//     padding-left: 25vw;
//     width:90vw;
//     height:100vh;
// `
