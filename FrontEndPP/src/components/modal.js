import React from 'react'
import styled from "styled-components";

// const TaskContainer = ({ tasks, setTasks, dark }) => {

//     const [todo, setTodo] = useState({ completed: false, title: "", description: "" })

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (todo.title) {
//             let newTask = { ...todo }
//             let newTasks = [...tasks, newTask]
//             setTasks(newTasks)
//             setTodo({ title: '', description: '', completed: false })
//             localStorage.setItem("myTodoTasks", JSON.stringify(newTasks));
//         }
//     }

//     const handleChange = (e) => {
//         setTodo({ ...todo, [e.target.name]: e.target.value })
//     }
// }

export default function Modal({isOpen, setModalOpen}) {
    if(isOpen){
    
    return(
        <>
{/* 
        <div className='tasks-container'>
            <form className='input-form' action='handleSubmit' onSubmit={handleSubmit}>
                <input className='task-input task-input-title'
                    name='title' type="text" placeholder='Enter Title'
                    onChange={handleChange} value={todo.title} />


                    
                <input className='task-input task-input-desc'
                    name='description' type="text" placeholder='Enter Description'
                    onChange={handleChange} value={todo.description} />
                <button className={`task-btn ${dark ? 'darkMode-add-btn' : 'lightMode-add-btn'} add-btn`}
                    type='submit'>Add</button>
            </form >


        </div>
 */}







        <ModalFundo>
            <AreaModal>
            
        
                    <TextoLabel>Titulo da atividade</TextoLabel>
                    <Input/>
        
                    <TextoLabel2> Data</TextoLabel2>
                    <Input2/>

                <DivBotãoCancelar>
                    <BotãoCancelar onClick={setModalOpen}>Cancelar</BotãoCancelar>    
                </DivBotãoCancelar>
                <DivBotãoSalvar>
                    <BotãoSalvar onClick={setModalOpen}>Salvar</BotãoSalvar>
                </DivBotãoSalvar>
            </AreaModal>
        </ModalFundo>
    </>
    )
}
 
}


const Input = styled.input`
    position: absolute;
    background-color:gray;
    opacity: 15%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width:20vw;  
    border:0;
    border-bottom:0.1;
    border-radius:10px;
    font-size: 15px;
    top:0;
    margin-top:50px;
    left:0;
    margin-left: 10px;
`


const TextoLabel = styled.p`
    position: absolute;
    font-size: 15px;
    top:0;
    margin-top:20px;
    left:0;
    margin-left: 30px;
`

const Input2 = styled.input`
    position: absolute;
    background-color:gray;
    opacity: 15%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    width:27vw;
    border:0;
    border-bottom:0.1;
    border-radius:10px;
    font-size: 15px;
    top:0;
    margin-top:110px;
    left:0;
    margin-left: 10px;
`


const TextoLabel2 = styled.p`
    position: absolute;
    font-size: 15px;
    top:0;
    margin-top:80px;
    left:0;
    margin-left: 30px;
`




const DivBotãoSalvar = styled.div`
    display:flex;
`

const BotãoSalvar = styled.button`
    position:absolute;    
    background-color:aqua;
    border:none;
    border-radius:10px;
    top:0;
    width:6vw;
    height:30px;
    margin-top:260px;
    left:0;
    margin-left:77%;
`


const DivBotãoCancelar = styled.div`
    display:flex;
`


const BotãoCancelar = styled.button`
    position:absolute;    
    background-color:gray;
    border:none;
    border-radius:10px;
    top:0;
    width:6vw;
    height:30px;
    margin-top:260px;
    left:0;
    margin-left:55%;
`

const AreaModal = styled.form`
    position:relative;
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
