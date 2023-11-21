import Header from "../../components/header";
import styled from "styled-components";
import HomemCelular from "../../img/homemcelular.png"
import HomemComputador from "../../img/homemcomputador.png"
import PessoasReunião from "../../img/pessoasreuniao.png"
import MapaMundi from "../../img/mapamundi.png"
import Logo from "../../img/logo.png"
import Footer from "../../components/footer"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Principal() {
  
  const navigate = useNavigate()
  
  const toCadastro = () =>{
   navigate("/cadastro")
  }

  

  
  return (
  <>
    <Header/>
        <PrimeiroSection>
          <TextoGrande1>Gerencie suas atividades com <br/> facilidade</TextoGrande1>
          <SubTexto1>Seu assistente pessoal para o TDAH</SubTexto1>
          <ImagemHomemCelular src={HomemCelular}/>
        </PrimeiroSection>


        <SegundoSection>
          <ImagemHomemComputador src={HomemComputador}/>
          <Titulo2>O que Fazemos
          <Paragrafo2>O TaskTime é um organizador de tarefas desenvolvido especialmente para pessoas com Transtorno de Déficit de Atenção e Hiperatividade (TDAH), nos quais sofrem principalmente de desatenção persistente e facilmente se esquece de afazeres previamente agendados.       
          </Paragrafo2>
          </Titulo2>
        </SegundoSection>



        <TerceiroSection>
          <Titulo3>
          <SemMencionar>Sem mencionar</SemMencionar>
            Benefícios do TaskTime
            <Paragrafo3>Com o TaskTime você nunca mais vai esquecer suas tarefas, nosso gerenciador de atividade além de receber alerta sonoros, no qual o usuário pode marcar o horário desejado, proporcionaremos uma agenda própria para uma visualização mais agradável dos seus compromissos.
            </Paragrafo3>
          </Titulo3>
          <ImagemPessoasReunião src={PessoasReunião}/>
        </TerceiroSection>



        <QuartoSection>
          <ImagemMapaMundi src={MapaMundi}/>
          <Titulo4>
            <PodemosEsquecer>E não podemos esquecer</PodemosEsquecer>
            TDAH no mundo e <br/> no Brasil
            <Paragrafo4>
            O Transtorno de Déficit de Atenção e Hiperatividade (TDAH) é uma condição em que afeta milhões de crianças e adultos no mundo inteiro, estima-se cerca de 11 milhões de brasileiros que tenham TDAH. O TaskTime se tornara uma ferramenta essencial para auxiliar na organização pessoal para atividades diárias dessas pessoas.
            </Paragrafo4>
          </Titulo4>
        </QuartoSection>



        <QuintaSection>
          <Titulo5>Sobre o TaskTime

            <Paragrafo5>O TaskTime é um gerenciador de atividades desenvolvidas para ajudar pessoas com TDAH a organizarem suas tarefas diárias. Com uma interface simples e intuitiva, o TaskTime permite que você programe suas atividades e receba notificações sonoras para recordá-lo no horário pré-estabelecido. Acreditamos que o gerenciamento eficiente de tarefas pode melhorar a qualidade de vida com pessoas com TDAH.
            </Paragrafo5>
            <Link to="/cadastro"><BotãoCadastro onClick={toCadastro}>Cadastra-se</BotãoCadastro></Link>
          </Titulo5>
        </QuintaSection>
      


        <FooterCerto>
          <LogoFooter src={Logo}/>
          <TextoLogo>TaskTime</TextoLogo>
          <ContainerContato>Contato
            <ContatoTexto>(+55) 51 98199-9999</ContatoTexto>
            <ContatoTexto>senacsenacsen@gmail.com</ContatoTexto>
          </ContainerContato>
          <ContainerEndereço>Onde Estamos
            <EndereçoTexto>Av. Unisinos, 950</EndereçoTexto>  
            <EndereçoTexto>São Leopoldo</EndereçoTexto>  
            <EndereçoTexto>Rio Grande do Sul</EndereçoTexto>  
            <EndereçoTexto>93022-750</EndereçoTexto>  
          </ContainerEndereço>

        </FooterCerto>

      <Footer/>
 
  </>
  );
}

export default Principal;




// PRIMEIRA SECTION 



const PrimeiroSection = styled.section`
    display: flex;
    margin-top: 2%;
    justify-content: space-between;
`
const SubTexto1 = styled.h3`
  position: absolute;
  margin-top: 360px;
  margin-left: 9%;
  font-size: 150%;
`

const TextoGrande1 = styled.h1`
  display: inline;
  font-size: 400%;
  margin-top: 8%;
  margin-left: 70px;
  height: 100px;
`


const ImagemHomemCelular = styled.img`
  /* float: right; */
  width: 30%;
  height: 70%;
  margin-top: 4%;
  margin-bottom: 10%;
  margin-left: 0%;
`


// SEGUNDA SECTION

const SegundoSection = styled.section`
  background-color: #E4F4F4;
  display: flex;
  max-width:100vw;
`

const Titulo2 = styled.h1`
  font-size: 250%;
  margin-top: 80px;
  margin-left: 20%;
`
const ImagemHomemComputador = styled.img`
  float: left;
  margin-top: 8%;
  margin-left: 9%;
  width: 70%;
  margin-bottom: 5%;
`
const Paragrafo2 = styled.p`
  max-width: 70%;
  font-size: 60%;
  text-align: left;
  line-height: 1.5;
  word-spacing: 5px;
  font-weight: 400;
`


// TERCEIRA SECTION 

const TerceiroSection = styled.section`
    display: flex;
`
const ImagemPessoasReunião = styled.img`
  border: 0;
  float: right;
  margin-top: 110px;
  margin-left:5%;
  width: 80%;
  margin-bottom: 150px;
`
const Titulo3 = styled.h1`
  font-size: 250%;
  margin-top: 80px;
  margin-left: 9%;
`

const Paragrafo3 = styled.p`
max-width: 70%;
font-size: 60%;
text-align: left;
line-height: 1.5;
word-spacing: 5px;
font-weight: 400;
`

const SemMencionar = styled.p`
  font-size: 30%;
  margin-bottom: 0;
`




// QUARTA SECTION 

const QuartoSection = styled.section`
    background-color: #E4F4F4;
    display:flex;
`
const ImagemMapaMundi = styled.img`
  float: left;
  margin-top: 110px;
  margin-left: 9%;
  width: 50%;
  margin-bottom: 150px;
`
const Titulo4 = styled.h1`
  font-size: 290%;
  margin-top: 80px;
  margin-left: 20%;
`
const PodemosEsquecer = styled.p`
  font-size: 30%;
  margin-bottom: 0;
`
const Paragrafo4 = styled.p`
  max-width: 80%;
  font-size: 50%;
  text-align: left;
  line-height: 1.5;
  word-spacing: 5px;
  font-weight: 400;
`





// QUINTA SECTION 

const QuintaSection = styled.section`
`
const Titulo5 = styled.h1`
  text-align: center;
  font-size: 400%;
  margin-top: 100px;
`
const Paragrafo5 = styled.p`
  max-width: 80%;
  margin-top: 50px;
  margin-left: 12%;
  text-align: center;
  font-size: 40%;
  line-height: 1.5;
  word-spacing: 5px;
  font-weight: 400;
`
const BotãoCadastro = styled.button`
  background-color: #61ADBF;
  width: 50%;
  height: 10%;
  margin-top: 50px;
  margin-bottom: 90px;
  border-radius: 1000px;
  border: 0;
  font-size: 100%;
  color: white;

  &:hover{
    width: 50%;
    height: 10%;
    margin-top: 50px;
    border-radius: 1000px;
    background-color: #3C7886;
    border: 0;
    }
`

// FOTTER FAKE 

const FooterCerto = styled.footer`
  background-color: #03313C;
  display:flex;
  height:10%;
`

const LogoFooter = styled.img`
  width: 13%;
  height: 13%;
  margin-top:10px;
  margin-left: 0.5%;
`
const TextoLogo = styled.h1`
  font-size: 200%;
  position:absolute;
  color: white;
  margin-top: 110px;
  margin-left: 2%;
`

const ContainerContato = styled.h4`
  margin-left: 15%;
  font-size: 200%;
  color: white;
`

const ContatoTexto = styled.ul`
  font-size: 50%;
  margin-bottom: 5px;
  margin-top: 5px;
`
const ContainerEndereço = styled.h4`
  margin-left: 10%;
  font-size: 200%;
  color: white;
  `

const EndereçoTexto = styled.ul`
  font-size: 50%;
  margin-bottom: 5px;
  margin-top: 5px;
`


