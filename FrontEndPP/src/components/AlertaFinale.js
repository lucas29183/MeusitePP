import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Alarm from "../pages/usuário/Components/Alarm";




function AlertaFinale() {

    const alarms = useSelector(state => state.alarmReducer.alarms)



    return (
        <>
            <DivdoAlerta className="alarm-list-container">
                {alarms?.map((alarm, i) =>
                    <Alarm key={i} index={i} alarm={alarm} />)}
            </DivdoAlerta>


        </>
    )
}

export default AlertaFinale


const DivdoAlerta = styled.div`

`
