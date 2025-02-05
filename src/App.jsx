

import './normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MisProductos from './pages/MisProductos'
import NuevaVenta from './pages/NuevaVenta'
import Profile from './pages/Profile'
import NavbarComponent from './components/NavbarComponent.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Routes, Route } from "react-router-dom";
import CardDetail from './pages/CardDetail.jsx';

import { ActiveProvider } from "./context/ActiveContext.jsx";
import MyOrders from './pages/MyOrders.jsx';
import MenuProfile from './components/profile/MenuProfile.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {

  return (
    <>
    <NavbarComponent />
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto/:id" element={<CardDetail />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil/" element={<Profile />} /> 
        <Route path="/perfil/nueva-venta" element={<NuevaVenta />} />
        <Route path="/perfil/mis-productos" element={<MisProductos />} />
        <Route path="/perfil/pedidos-anteriores" element={<MyOrders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

    
    <Footer />

    </>
  )
}

export default App
