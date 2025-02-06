import axios from 'axios'
import {createContext,useEffect,useState} from 'react'
import { ProductsCart} from '../mockCart'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])

//   let total= cart.reduce((accumulator ,item) => {
//     return accumulator += (parseInt(item.product_price)*parseInt(item.cantidad));
//  }, 0)
 
//  const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)

  const getData = async () =>{
    const data= await ProductsCart()
    // const response= await axios.get("http://localhost:3001/carrito")
    // console.log(response.data);
    
    let newData=data.map(item =>({...item, total_quantity:1, add:true}))

    setCart (newData)
    console.log("CartContexst25" , cart, newData);
    
  }

  useEffect (()=>{
    getData()
  },[])
  

  return <CartContext.Provider value={{cart,setCart}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 