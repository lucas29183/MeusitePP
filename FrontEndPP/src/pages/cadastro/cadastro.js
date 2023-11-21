import styled from "styled-components"
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";




function Cadastro() {

        const [name, setName]         = useState("");    
        const [email, setEmail]       = useState("");
        const [password, setPassword] = useState("");
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const data = { 
                name,
                email,
                password 
            };
    
            const response = await axios.post('http://localhost:3008/api/cadastrar/usuario', data);
            
            if (response.data.success) {
                alert("Conta criada com sucesso!");
                navigate("/Home");
            } else {
                alert("Não foi possível criar a conta");
            }
        
    };
    



const navigate = useNavigate()

const toLogin = () =>{
    navigate("/login")
}


  return (
    <>
        <Header/>
        <DivPai>  
            <LadoCadastro>
                <ContainerFaçaCadastro>
                    <TextoFaçaCadastro>Faça seu cadastro</TextoFaçaCadastro>
                    <SubtextoCadastro>Crie sua conta agora mesmo <br/> e organize melhor sua vida</SubtextoCadastro>
                
                    <Label>
                        <TextoLabel>Digite seu melhor Email:
                            <br/>
                            <CaixaLabel 
                                type='text'
                                name='email'
                                id='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </TextoLabel>

                        
                            <br/>
                        <TextoLabel>Digite seu nome de usuario:
                            <br/>
                            <CaixaLabel
                                type='text'
                                name='name'
                                id='name'
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                        </TextoLabel>
                            <br/>
                        
                        
                        <TextoLabel>Digite sua melhor senha:
                            <br/>
                            <CaixaLabel
                                type='password'
                                name='password'
                                id='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </TextoLabel>
                            <br/>
                        
                    </Label>
           
                   
                    <BotãoFinalizar type="submit" onClick={handleSubmit}>Cadastrar</BotãoFinalizar>

                </ContainerFaçaCadastro>
            </LadoCadastro>
            
            


            
            <Ladologin>   
                    <TextoLadoLogin>Mas caso ja tenha uma conta</TextoLadoLogin>
                    <Link to="/login"><BotãoLogar onClick={toLogin}>Logar</BotãoLogar></Link>
              
            </Ladologin>

        </DivPai>

    </>
  );
}

export default Cadastro;



const Label = styled.form`
`


const LadoCadastro = styled.section`
    /* background-color: red; */
    display: inline-block;
    height: 90vh;
    width: 50vw;
`

const ContainerFaçaCadastro = styled.div`
    margin-left: 70px;
    margin-top: 30px;
    `

const TextoFaçaCadastro = styled.h1`
    font-size: 50px;
    margin-bottom: 10px;

`
const SubtextoCadastro = styled.p`
    font-size:20px;
    font-weight: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    `

const TextoLabel = styled.label`
    font-size:19px;
    padding-top: 10px;
    `

const CaixaLabel = styled.input`
    background-color: #E4F4F4;
    width: 20vw;
    min-width: 15vw;
    height: 30px;
    margin-top: 10px;
    border-radius: 40px;
    border-width:0.5px;
    border-color:gray 50%;
    border-style:solid
    `
const BotãoFinalizar = styled.button`
    border-radius: 40px;
    background-color: #E4F4F4;
    width: 250px;
    height: 40px;    
    margin-top:20px;
    margin-left: 40%;
    margin-bottom: 40px;
    font-size: 25px;
    border-width:0.5px;
    border-color: gray;
    box-shadow: none;
    border-style: solid
`

const DivPai = styled.body`
    overflow:hidden;
    display:flex;
    margin: 0;
    max-width: 100vw;
    max-height: 100vh;
 
`


    
const Ladologin = styled.section`
    /* display: grid; */
    background-color: rgb(5,65,78,1);
    border-color:black;
    border-width: 100px;
    height: 90vh;
    width: 50%;

`

const TextoLadoLogin = styled.h3`
    font-size:25px;
    color: white;
    margin-left:35vh;
    margin-top:200px;
`


const BotãoLogar = styled.button`
    border-radius: 40px;
    background-color: #E4F4F4;
    width: 250px;
    height: 40px;
    margin-left:40vh;
    border: 0px;
    font-size: 25px;
    border-width:2px;
    border-color: gray;
    box-shadow: none;
    border-style: solid
`