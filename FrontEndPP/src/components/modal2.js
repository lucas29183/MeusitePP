import React from 'react'
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useStoreLocal from '../pages/usuário/Hooks/useStore'
import { setAlarm } from '../pages/usuário/redux/actions/AlarmAction'
import TaskContainer from './TaskContainer';



export default function Modal2({ isOpen2, setModalOpen2 }) {

    const dispatch = useDispatch()
    const [time, setTime] = useState('')

    const alarms = useSelector(state => state.alarmReducer.alarms)
    // const activeAlarms = useSelector(state => state.alarmReducer.activeAlarm)

    const generateLightColorHex = () => {
        let color = "#";
        do {
            for (let i = 0; i < 3; i++)
                color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
            // eslint-disable-next-line no-loop-func
        } while (alarms.filter(alarm => alarm.bgColor === color).length > 0);
        return color;
    }

    const HandleAddAlarm = () => {
        if (time) {
            if (alarms.filter(alarm => alarm.time === time).length === 0) {
                const bgColor = generateLightColorHex();
                dispatch(setAlarm({ time, bgColor }))
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useStoreLocal([...alarms, { time, bgColor }])
            }
            else {
                alert("Este horário ja foi marcado!!")
                console.log("Pego");
            }
        }
        setTime('')
    }

    const handleChange = (e) => {
        setTime(e.target.value)
    }

    useEffect(() => {
        let myTodo = localStorage.getItem('myTodoTasks');
        if (myTodo) {
            setTasks(JSON.parse(myTodo))
        }
    }, [])




    const [tasks, setTasks] = useState([])

    useEffect(() => {
        let myTodo = localStorage.getItem('myTodoTasks');
        if (myTodo) {
            setTasks(JSON.parse(myTodo))
        }
    }, [])



    if (isOpen2) {

        return (

            <>
                <ModalFundo>
                    <AreaModal >
                        {/* <TaskContainer tasks={tasks} setTasks={setTasks} /> */}

                        <DefinirHorario type="time" value={time} onChange={handleChange} placeholder="Add a new alarm" />
                        <Botãoalarm onClick={HandleAddAlarm}>Set Alarm</Botãoalarm>
                      
                      
                        <BotãoFechar onClick={setModalOpen2}>Fechar</BotãoFechar>
          
            
                    </AreaModal>
                </ModalFundo>

            </>
        )
    }

    return null
}



const DefinirHorario = styled.input`
    position:absolute;
    margin-top: 0px;
    width: 200px;
    left: 10%;
`

const Botãoalarm = styled.button`
    position: absolute;
    margin-top: 50px;
    width:200px;
    left: 10%;
`

const BotãoFechar = styled.button`
    position:fixed;
    background-color:gray;
    border:none;
    border-radius:10px;
    top:0;
    width:5vw;
    height:30px;
    margin-top:320px;
    left:0;
    margin-left:75%;
`


const AreaModal = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    padding: 200px;
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

