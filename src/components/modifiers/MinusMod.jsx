import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Dash } from 'react-bootstrap-icons'

const MinusMod = ({itemCart}) => {
  // const {cart,setCart} = useContext(CartContext)

  // function Modquantity(id){
  //   const newAdd=cart.map(item =>{
  //     if(item.id===id){
  //       return {...item, cantidad:itemCart.quantity-1}
  //     }
  //     return item
  //   }
  // )
    // setCart(newAdd)

  // useEffect (()=>{
  //   Modquantity()
  // },[])
  
  return (
    <div>
      <Button className='p-1' variant='light'
      // onClick={() => Modquantity(itemCart.id)}
      ><Dash size={10}/>
      </Button>
    </div>
  )
}

export default MinusMod