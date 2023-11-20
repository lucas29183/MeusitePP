import styled from "styled-components"
import Logo from "../img/logo.png"



function Header() {
  return (

        <ContainerHeader>
            <TituloHeader>TimeTask</TituloHeader>
            <ImagemLogo src={Logo}/>
        </ContainerHeader>
  );
}

export default Header;




const ContainerHeader = styled.header`
    background-color: rgb(5,65,78,1);
    height: 10vh;
    border-bottom: 1.5px solid black;
    max-width: 100vw;

` 

const TituloHeader = styled.h2`
    font-size: 40px;
    color: white;
    margin-left: 25px;
    display: inline-block;
    margin-top: 10px;
    margin-bottom: -20px;
`

const ImagemLogo = styled.img`
    margin-left: 90vw;
    margin-top: -85px;
    width: 80px;
`


