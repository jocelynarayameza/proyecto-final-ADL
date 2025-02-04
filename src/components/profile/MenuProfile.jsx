import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import { Person, Shop, BagPlus} from 'react-bootstrap-icons';
import { Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActiveContext } from '../../context/ActiveContext';

const MenuProfile = () => {
  let {profileActive,setProfileActive} = useContext(ActiveContext)

  const onUpdateProfileActive = (value)=>{
    setProfileActive(value);
  }

  return (
    <div id='menuProfile' className='yellowColor py-0'>
      <Container>
        <Row>
          <Col xs={12} sm={3}>
            <h2 className='pt-4 textProfileTitle'>Mi perfil</h2>
          </Col>
          <Col xs={12} sm={9}>
            <Nav justify variant="tabs">
              <Nav.Item>
                <Nav.Link as={Link} to="/perfil" className={profileActive==='about-me'? 'textProfile profileLink':'textProfile'} onClick={()=> onUpdateProfileActive('about-me')}>
                  <Person size={30}/>
                  <p>Mis datos</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/perfil/nueva-venta" className='textProfile' onClick={()=> onUpdateProfileActive('new-post')}>
                  <BagPlus size={30}/>
                  <p>Nueva venta</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/perfil/mis-productos"  className='textProfile' onClick={()=> onUpdateProfileActive('my-posts')}>
                  <Shop size={30}/>
                  <p>Mis productos</p>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
  </div>
  )
}

export default MenuProfile
