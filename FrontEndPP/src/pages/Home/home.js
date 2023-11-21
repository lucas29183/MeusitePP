import Navbar from "../../components/navbar.js";
import styled from "styled-components";
import moment from 'moment';
import Modal from "../../components/modal.js";
import Modal2 from "../../components/modal2.js";
import { useState } from "react";
import Clock from "../usuário/Components/Clock"
import Alarm from "../usuário/Components/Alarm";
import { useSelector } from 'react-redux'
function Home() {
  
    
        // const dispatch = useDispatch()
        // const [time, setTime] = useState('')
      
        const alarms = useSelector(state => state.alarmReducer.alarms)
    
    


    const dataAtual = moment().format('DD/MM/YYYY')
    console.log(dataAtual)    

        const[openModalEditor, setOpenModal] = useState(false)
        const[openModalEditor2, setOpenModal2] = useState(false)


    return (
    <>
        <Navbar/>
        <BodyHome>    
            

            <DivPrincipal>
                <Clock />
                <DataHoje>{dataAtual}</DataHoje>
            </DivPrincipal>



            <div className="alarm-list-container">
            {alarms?.map((alarm, i) => <Alarm key={i} index={i} alarm={alarm} />)}
            </div>
            


            <BotãoCriarTarefa onClick={() => setOpenModal2(true)}>
                <TextoCriarTarefa>
                    Criar Tarefa
                </TextoCriarTarefa>
            </BotãoCriarTarefa>


                <Modal isOpen={openModalEditor} setModalOpen={() => setOpenModal(!openModalEditor)} />
                <Modal2 isOpen2={openModalEditor2} setModalOpen2={() => setOpenModal2(!openModalEditor2)}/>
                
                



                
        </BodyHome>


    </>

    )
}


export default Home;








const BodyHome = styled.body`
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    justify-content: center;
    align-items:center;
    padding-left: 25vw;
    width:90vw;
    height:100vh;
`

const DataHoje = styled.div`
    display:flex;
    justify-content: center;
    font-size: 40px;
    text-shadow: 0 0 4px #80b5c4;
`


const DivPrincipal = styled.main`
    display:block;
    position:relative;
    justify-content: center;
    background-color: #E4F4F4;
    width: 70vw;
    height: 30vh;
    margin-bottom:20px;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    stroke-width: 1px;
    stroke: #000;
    `

// const TituloPrincipal = styled.h1`
//     font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     position:absolute;
//     margin-top:10px;
// `

const BotãoCriarTarefa = styled.button`
    display:flex;
    position:fixed;
    top:90%;
    left:55%;
    transform:translate(-40%, -90%);
    width: 50vw;
    height:15vh;
    border:0;
    border-radius: 50px;
    background-color: #E4F4F4;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index:10;
`

const TextoCriarTarefa = styled.button`
    position:relative;
    margin-top: 20px;
    width: 50vw;
    font-size: 400%;    
    height:15vh;
    bottom:30%;
    background:none;
    border:none;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

// const DivFunção = styled.div`
    // background-color:gray;
    // display:flex;
    // position:relative;
    // justify-content: center;
    // margin-left:10vw;
    // margin-top: 50px;
    // width: 50vw;
    // height: 30vh;
    // border-radius: 50px;
    // filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    // stroke-width: 1px;
    // stroke: #000;
// `


// const BotãoLapis = styled.button`
//     object-fit: cover;
//     position: relative;
//     background:none;
//     border:none;
//     width: 50px;
//     height: 50px;
//     margin-top:10px;
//     margin-left: 60vw;
// `

// const BotãoPonto = styled.button`
//     object-fit: cover;
//     position: relative;
//     background:none;
//     border:none;
//     width: 50px;
//     height: 50px;
//     margin-top:10px;
//     margin-left: 42vw;
//     `


// const TresPontos = styled.img`
//     object-fit: cover;
//     width: 40px;
//     height: 40px;
// `

// const LapisLogo = styled.img`
//     object-fit: cover;
//     width: 50px;
//     height: 50px;
// `