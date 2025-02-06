import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Dash } from 'react-bootstrap-icons'
import { CartContext } from '../../context/CartContext'

const MinusMod = ({product}) => {
  // console.log(product);
  const {cart,setCart} = useContext(CartContext)

  function ModquantityMinus(id){
    console.log(id);
    
    const newAdd=cart.map(item =>{

      if(item.id_product===id && product.total_quantity>1){
        return {...item, total_quantity:product.total_quantity-1}
      } else if (item.id_product===id && product.total_quantity<=1) {
        return {...item, add:!item.add, total_quantity:0}
      }
      return item
      })
    setCart(newAdd)
  }

 
  
  return (
    <div>
      <Button className='p-1' variant='light'
      onClick={() => ModquantityMinus(product.id)}
      ><Dash size={15}/>
      </Button>
    </div>
  )
}

export default MinusMod