// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import useStoreLocal from '../../Hooks/useStore'
// import { setAlarm } from '../../redux/actions/AlarmAction'
// import Alarm from '../Alarm'

// import './AlarmContainer.css'

// const AlarmContainer = () => {
//   const dispatch = useDispatch()
//   const [time, setTime] = useState('')

//   const alarms = useSelector(state => state.alarmReducer.alarms)
//   const activeAlarms = useSelector(state => state.alarmReducer.activeAlarm)

//   const generateLightColorHex = () => {
//     let color = "#";
//     do {
//       for (let i = 0; i < 3; i++)
//         color += ("0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
//       // eslint-disable-next-line no-loop-func
//     } while (alarms.filter(alarm => alarm.bgColor === color).length > 0);
//     return color;
//   }

//   const HandleAddAlarm = () => {
//     if (time) {
//       if (alarms.filter(alarm => alarm.time === time).length === 0) {
//         const bgColor = generateLightColorHex();
//         dispatch(setAlarm({ time, bgColor }))
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         useStoreLocal([...alarms, { time, bgColor }])
//       }
//       else {
//         alert("Alarm is already scheduled")
//         console.log("Pego");
//       }
//     }
//     setTime('')
//   }

//   const handleChange = (e) => {
//     setTime(e.target.value)
//   }

//   return (

//     <>
        
//         <input type="time" className='add-alarm-input' value={time} onChange={handleChange} placeholder="Add a new alarm" />


//         <div className="alarm-add-btn-container">
//           <button className='add-alarm-button' onClick={HandleAddAlarm}>Set Alarm</button>
//         </div>

//     </>
//   )
// }

// export default AlarmContainer