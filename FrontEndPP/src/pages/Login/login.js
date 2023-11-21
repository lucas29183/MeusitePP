import styled from "styled-components"
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     console.log( email, password)

    //     const data = {
    //         email,
    //         password
    //     };

    //     const response = await api.post('http://localhost:3008/api/logar', data);
        
    //     if (response.data.success && response.data.data.status === 'A') {
	// 		navigate({toHome});

    //         localStorage.setItem('@auth:user', response.data.data.id);
    //         localStorage.setItem('@auth:token', response.data.data.token);
    //     } else {
    //         alert("Não foi possível entrar na conta");
    //     }
    // };

    const navigate = useNavigate()


    const saveUserinfoLocalStorage = (email, token, id, nome) => {
      localStorage.setItem('token', token)
      localStorage.setItem('email', email)  
      localStorage.setItem('id', id)
      localStorage.setItem('nome', nome)
  
      console.log(nome)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
  
      const credencials = { email, password }
  
      axios.post('http://localhost:3008/api/login', credencials, {
  
        headers: {
          'Content-Type': 'application/json',
  
        }
      })
        .then(response => {
            console.log(response.data)
            if(response.data.success) {
                localStorage.setItem('nome', response.data.data[0].name)
                localStorage.setItem('token', response.data.data[0].token)
            }
          
            
          //saveUserinfoLocalStorage(response.data.token)
          // recuperando informações depois que usario logou
          const token = response.data.data[0].token;
          const email = response.data.data[0].email;
          const id = response.data.data[0].id;
          const nome = response.data.data[0].name
          //função para salvar informalções depois que o usuario logu
          //saveUserinfoLocalStorage(email, token, id, nome)
          navigate('/Home')
        })
        .catch(error => alert(error))
    }

const toCadastro = () =>{
    navigate("/cadastro")
}



  return (
    <>
        <Header/>
        <DivPai>  
            
            <Ladologin>
                <TextoLadoLogin>Clique aqui para cadastrar-se</TextoLadoLogin>
                <Link to="/cadastro"><BotãoLogar onClick={toCadastro}>Cadastrar</BotãoLogar></Link>
            </Ladologin>




            <LadoCadastro>
                <ContainerFaçaCadastro>
                    <TextoFaçaCadastro>Faça seu login</TextoFaçaCadastro>
                    <SubtextoCadastro>Entre na sua conta para continuar seu <br/>gerenciamento pessoal</SubtextoCadastro>
                
                    <Formulariologin>
                        <TextoLabel>Email:
                            <br/>
                            <CaixaLabel
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </TextoLabel>
                            <br/>



                        <TextoLabel>Senha:
                            <br/>
                            <CaixaLabel
                            type="password"
                            name="password"
                            placeholder="senha"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </TextoLabel>
                        <br/>
                    </Formulariologin>

                    <BotãoHome onClick={handleSubmit}>Logar</BotãoHome>

                </ContainerFaçaCadastro>
            </LadoCadastro>
        </DivPai>

    </>
  );
}

export default Login;



const Formulariologin = styled.form`

`



const LadoCadastro = styled.section`
    /* background-color: red; */
    display: inline-block;
    height: 100%;
    width: 50%;
`

const ContainerFaçaCadastro = styled.div`
    margin-left: 70px;
    margin-top: 60px;
    `

const TextoFaçaCadastro = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;

`
const SubtextoCadastro = styled.p`
    font-size:20px;
    font-weight: 20px;
    margin-left: 20px;
    margin-bottom: 50px;
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
    height: 100vh;
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
    margin-left:35% ;
    border: 0px;
    font-size: 25px;
    border-width:2px;
    border-color: gray;
    box-shadow: none;
    border-style: solid
`


const BotãoHome = styled.button`
    border-radius: 40px;
    background-color: #E4F4F4;
    width: 250px;
    height: 40px;
    margin-left:45%;
    margin-top: 15px;
    border: 0px;
    font-size: 25px;
    border-width:2px;
    border-color: gray;
    box-shadow: none;
    border-style: solid
`