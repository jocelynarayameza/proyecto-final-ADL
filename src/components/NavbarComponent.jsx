import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { CartFill } from 'react-bootstrap-icons';


import logo from '../assets/img/Vivi.png'


const NavbarComponent = () => {
  const userLogged = true


  return (
    <Navbar expand="lg" sticky="top" id='navbarConfig'>
      <Container fluid className='skyBlue p-1'>
      <Navbar.Brand href="/">
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
            <Nav.Link href="/">Home</Nav.Link>
            {userLogged===true ? (<Nav.Link href="/perfil">Mi Perfil</Nav.Link>):null}
            {!userLogged===true ? (<Nav.Link href="/register">Registro</Nav.Link>):null}
            
            {!userLogged===true ? (<Nav.Link href="/login">Iniciar sesion</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link href="/nueva-venta">Nueva venta</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link href="/mis-productos">Mis productos</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link  href="/">Cerrar sesion</Nav.Link>):null}
            {userLogged===true ? (<Nav.Link href="/cart"><CartFill size={23}/></Nav.Link>):null}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent