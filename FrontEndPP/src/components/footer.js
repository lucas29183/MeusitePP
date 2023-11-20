import styled from "styled-components";


function Footer() {
    return (
    <Fotter>
        <TextoFooter>2023 © Lucas Jentz Camargo. Todos os direitos reservados.</TextoFooter>
    </Fotter>
    );
  }
  
  export default Footer;
  



  const Fotter = styled.footer`
  background-color: #05414E;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 1.5px solid black;
`

const TextoFooter = styled.p`
  color: white;
  border: 0px;
  margin: 0px;
  margin-left: 20px;
`