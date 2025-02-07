import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'
import { CartContext } from '../../context/CartContext'

const PlusMod = ({product}) => {
  const {cart,setCart} = useContext(CartContext)

  function Modquantity(id){
    const newAdd=cart.map(item =>{
      if(item.id_product===id){
        return {...item, total_quantity:product.total_quantity+1}
      }
      return item
    })
    setCart(newAdd)
  }


  return (
    <div>
      <Button className='p-1' variant='light'
      onClick={() => Modquantity(product.id)}
      ><Plus size={15}/>
      </Button>
    </div>
  )
}

export default PlusMod
