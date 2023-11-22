
import Navbar from "../../components/navbar";
import styled from "styled-components";

import imgUsuario from '../../img/usuario.png'
import AlertaFinale from "../../components/AlertaFinale";


function Usuario() {



  return (
    <>
      <Navbar />

      <DivUsuario>
        <Usuarioimagem src={imgUsuario} />

        <DivQuebraLiha>
          <DivInfo>
            <SubTitulo>Nome:</SubTitulo>
            <CaixaNome><TextoNome>Lucas Jentz Camargo</TextoNome></CaixaNome>
          </DivInfo>


          <DivInfo>
            <SubTitulo>Email:</SubTitulo>
            <CaixaEmail><TextoEmail>lucasjentzcamargo@gmail.com</TextoEmail></CaixaEmail>
          </DivInfo>
        </DivQuebraLiha>

      </DivUsuario>


      <LinhaSeparatoria/>


      <DivAlerta>
        <AlertaFinale/>
      </DivAlerta>


    </>
  );

}

export default Usuario;


const DivAlerta = styled.div`
  position: relative;
  left:25vw;
  width:250px;

`

const SubTitulo = styled.h4`
  opacity: 40%;
  font-size: 23px;
`

const LinhaSeparatoria = styled.hr`
  position: relative;
  width:86.6vw;
  height:20px;
  border-width:5px;
  margin-left:12.7%;
  margin-top:100px;
`


const Usuarioimagem = styled.img`
  position: relative;
  left: 10vw;
  top:5vh;
  width:250px;
  height:250px;
  object-fit: cover;
`

const DivQuebraLiha = styled.div`
  display: block;
`


const DivInfo = styled.div`
    display: block;
    position: relative;
    width: 40vw;
    min-width:700px;
    top: 7vh;
    left: 15vw;
    padding-bottom:25px;
`
const TextoNome = styled.h1`
  position: relative;
  left:1vw;
`

const CaixaEmail = styled.div`  
  position: relative;
  top:10px;
  background-color:aqua;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  
`


const TextoEmail = styled.h1`
  position: relative;
  left:1vw;
`

const CaixaNome = styled.div`
  position: relative;
  top:10px;
  background-color:aqua;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`




const DivUsuario = styled.div`
  display:flex;
  margin-left:14%;
  padding-bottom:20px;
`














// const BodyHome = styled.body`
//     font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     justify-content: center;
//     align-items:center;
//     padding-left: 25vw;
//     width:90vw;
//     height:100vh;
// `
