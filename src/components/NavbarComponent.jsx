import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useState } from 'react';
import { CartFill } from 'react-bootstrap-icons';
import { ActiveContext } from '../context/ActiveContext';
import { Link } from 'react-router-dom';

import logo from '../assets/img/Vivi.png'


const NavbarComponent = () => {
  const userLogged = true
  let {activeLink,setActiveLink}= useContext(ActiveContext);


  const onUpdateActiveLink = (value)=>{
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" sticky="top" id='navbarConfig'>
      <Container fluid className='skyBlue p-1'>
      <Navbar.Brand to="/">
            <img
              alt="Vivi chibi"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            FF Market
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="justify-content-end textConfig">
            <Nav.Link as={Link} className={activeLink==='home'? 'active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('home')} to="/">Home</Nav.Link>
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='profile'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('profile')} to="/perfil">Mi Perfil</Nav.Link>):null}
            {!userLogged===true ? (<Nav.Link as={Link} className={activeLink==='register'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('register')} to="/register">Registro</Nav.Link>):null}
            {!userLogged===true ? (<Nav.Link as={Link} className={activeLink==='login'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('login')} to="/login">Iniciar sesion</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='newPost'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('newPost')} to="/nueva-venta">Nueva venta</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='products'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('products')} to="/mis-productos">Mis productos</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className='backHover' onClick={()=> onUpdateActiveLink('home')} to="/">Cerrar sesion</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='cart'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('cart')} to="/cart"><CartFill size={23}/></Nav.Link>):null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent