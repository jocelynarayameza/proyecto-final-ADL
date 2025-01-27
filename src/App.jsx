

import './normalize.css'
import './App.css'


import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MisProductos from './pages/MisProductos'
import NuevaVenta from './pages/NuevaVenta'
import Profile from './pages/Profile'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Navbar />
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Profile />} /> 
        <Route path="/perfil/nueva-venta" element={<NuevaVenta />} />
        <Route path="/perfil/mis-productos" element={<MisProductos />} />
        <Route path="/cart" element={<Cart />} />
      
    </Routes>
    
    <Footer />

    </>
  )
}

export default App
