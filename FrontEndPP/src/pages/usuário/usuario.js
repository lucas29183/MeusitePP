import Navbar from "../../components/navbar.js";
// import styled from "styled-components"; 
import '../../App.css';
import { useEffect } from 'react';
import Clock from './Components/Clock';
import AlarmContainer from './Components/AlarmContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setAlarmsFromStorage } from './redux/actions/AlarmAction';



function Usuario() {
  const activeAlarms = useSelector(state => state.alarmReducer.activeAlarm)
  const dispatch = useDispatch()

  useEffect(() => {
    const myAlarms = localStorage.getItem('myAlarms');
    if (myAlarms) {
      dispatch(setAlarmsFromStorage(JSON.parse(myAlarms)))
    }
  }, []);

  return (
    <div className="App" style={{ backgroundColor: activeAlarms ? activeAlarms.bgColor : "#000" }}>
      <Clock />
      <AlarmContainer />
    </div>
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
