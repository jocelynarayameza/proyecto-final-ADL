import axios from 'axios'
import {createContext,useEffect,useState} from 'react'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  const [totalCart,setTotalCart]=useState([])

  let total= cart.reduce((accumulator ,item) => {
    return accumulator += (parseInt(item.price)*parseInt(item.cantidad));
 }, 0)
 
 const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)

  const getData = async () =>{
    const response= axios.get("http://localhost:3001/carrito")
    console.log(response.data);
    
    let newData=response.data.map(item =>({...item, cantidad:0, add:false}))
    setCart (newData)
    
  }

  useEffect (()=>{
    getData()
  },[])
  

  return <CartContext.Provider value={{cart,setCart,totalCart,setTotalCart,totalCLP}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 