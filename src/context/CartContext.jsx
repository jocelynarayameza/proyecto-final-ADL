import axios from 'axios'
import {createContext,useEffect,useState} from 'react'
import { ProductsCart} from '../mockCart'

const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart,setCart]=useState([])
  
  let total= cart.reduce((accumulator ,item) => {
    return accumulator += (parseInt(item.product_price)*parseInt(item.total_quantity))}, 0)

 const totalCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(total)
 const delivery=3000
 const totalDelivery = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(delivery)
 const discount=0
 const totalDiscount = new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(discount)
 const Order=total+delivery+discount
 const totalOrder= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(Order)

  const getData = async () =>{
    const data= await ProductsCart()
    // const response= await axios.get("http://localhost:3001/carrito")
    // console.log(response.data);
    
    let newData=data.map(item =>({...item, total_quantity:1, add:true}))
    setCart (newData);
  }

  useEffect (()=>{
    getData()
  },[])
  

  return <CartContext.Provider value={{cart,setCart,totalCLP,totalDelivery,totalDiscount, totalOrder}}>
    {children}
  </CartContext.Provider>
}

export {CartProvider, CartContext} 