import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Cadastro from "./pages/cadastro/cadastro";
import Principal from "./pages/principal/principal";
import Login from "./pages/Login/login"
import Home from "./pages/Home/home";
import Calendario from "./pages/calendario/calendario";
import Usuario from "./pages/usuário/usuario"



function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/calendario" element={<Calendario/>}/>
          <Route path="/Usuario" element={<Usuario/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
