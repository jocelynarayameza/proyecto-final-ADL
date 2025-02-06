import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext, useEffect, useState } from 'react';
import { CartFill } from 'react-bootstrap-icons';
import { ActiveContext } from '../context/ActiveContext';
import { Link } from 'react-router-dom';

import logo from '../assets/img/Vivi.png'
import { UserContext } from '../context/UserContext';
import { CartContext } from '../context/CartContext';


const NavbarComponent = () => {
  let {user,setUser} = useContext(UserContext)
  const userLogged=user.logged
  const {totalCLP}=useContext(CartContext)
  
  let {activeLink,setActiveLink,setProfileActive} = useContext(ActiveContext);

  const onUpdateActiveLink = (value)=>{
    setActiveLink(value);
  }

    const logoutButton = () => {
      setUser([])
      onUpdateActiveLink('home'); 
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
            <span className='titleConfig'>Final fantasy Marketplace</span>
          </Navbar.Brand>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
          <Nav className="justify-content-end textConfig">
            <Nav.Link as={Link} className={activeLink==='home'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('home')} to="/">Home</Nav.Link>
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='profile'? 'backHover active navbar-link':'backHover'} onClick={()=>[ onUpdateActiveLink('profile'),setProfileActive('about-me')]} to="/perfil">Mi Perfil</Nav.Link>):null}
            {!userLogged===true ? (<Nav.Link as={Link} className={activeLink==='register'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('register')} to="/register">Registro</Nav.Link>):null}
            {!userLogged===true ? (<Nav.Link as={Link} className={activeLink==='login'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('login')} to="/login">Iniciar sesion</Nav.Link>):null}
            {/* {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='newPost'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('newPost')} to="/perfil/nueva-venta">Nueva venta</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='products'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('products')} to="/mis-productos">Mis productos</Nav.Link>):null} */}
            {userLogged===true ? (<Nav.Link as={Link} className='backHover' onClick={logoutButton} to="/">Cerrar sesion</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link as={Link} className={activeLink==='cart'? 'backHover active navbar-link':'backHover'} onClick={()=> onUpdateActiveLink('cart')} to="/carrito"><CartFill size={23}/> Total:</Nav.Link>):null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent