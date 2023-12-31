import React from 'react';
import styled from "styled-components";
import {CDBSidebar,CDBSidebarContent,CDBSidebarHeader,CDBSidebarMenu,CDBSidebarMenuItem,} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import imgUsuario from '../img/usuario.png'

const Sidebar = () => {
  const nome = localStorage.getItem('nome');

    return (
      <div style={{ display: 'flex', position: 'fixed', height: '100vh',  overflow: 'scroll initial', alignItems: 'center',}}>
        <CDBSidebar textColor="#fff" backgroundColor="#03313C" >
          <CDBSidebarHeader style={{ textAlign: 'center' }} prefix={<i className="fa fa-bars fa-large"></i>} > 
            <Usuarioimagem src={imgUsuario} style={{ textAlign: 'center' }}/>
            <p className="text-decoration-none" style={{ color: 'white' }}>
             {nome} 
            </p>
          </CDBSidebarHeader>
        
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/Home" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='h1 mb-4'>Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/calendario" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='h1 mb-4'>Calendario</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Usuario" activeClassName="activeClicked">
                <CDBSidebarMenuItem className='h1 mb-4'>Usuário</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Login"  activeClassName="activeClicked">
                <CDBSidebarMenuItem className='h1 mb-4'>Sair</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
        </CDBSidebar>
      </div>
    );
  };
  
  export default Sidebar;
  

  const Usuarioimagem = styled.img`
  display: flex;
  position: relative;
  width: 50%;
  margin-left: 50px;
  margin-bottom: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
`

