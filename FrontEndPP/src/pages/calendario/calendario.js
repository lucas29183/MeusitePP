import Navbar from "../../components/navbar.js";
import styled from "styled-components";
import React, { useState } from 'react';
import CalendarHeader from "./CalendarHeader";
import CalendarTable from "./CalendarTable";
import './style.css'


function Calendario() {
  

    const [date, setDate] = useState(new Date());

    const handlePrevMonth = () => {
      const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      setDate(newDate);
    };
  
    const handleNextMonth = () => {
      const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      setDate(newDate);
    };



    return (
    <>
    <Navbar/>
    <BodyHome>   

    <div className="calendar">
      <CalendarHeader
        date={date}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <CalendarTable date={date} />
    </div>  
    
    </BodyHome>


    </>

    )
}

export default Calendario;








const BodyHome = styled.body`
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-content: center;
    align-items:center;
    padding-left: 25vw;
    width:90vw;
    height:100vh;
`
