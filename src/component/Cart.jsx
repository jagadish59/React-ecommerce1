import React from 'react'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {addCart} from '../redux/action'
import {minusItem} from '../redux/action'
import { delCart } from '../redux/action'

export const Cart = () => {
  const product=useSelector((state)=>state.handlecart)
  console.log(product.map((x)=>x.title))

      const dispatch=useDispatch()
    const addTocart=(product)=>{
        dispatch(addCart(product))
        
        
    }
    
    const deletoCart=(product)=>{
      dispatch(delCart(product))
    }
        const minusCart=(product)=>{
      dispatch(minusItem(product))
    }

  return (
    <div>
      <div className="container">
        <h1>thihs is cart</h1>
        

      

          {product.map(product=>{

            return(
              <div className="row">
              <>
              <div className="col-md-4">
                <img src={product.image} alt={product.title} height='200px' width='180px' />
              </div>
              <div className="col-md-4">
                <h3 className="">{product.title}</h3>
                <p>{product.qty}x{product.price}={product.qty *product.price}</p>
              </div>
              <div className="col-md-4 ">
                <div className="cente">

                <button className="btn btn-outline-green" onClick={()=>{minusCart(product)}}><i className="fa fa-minus"></i></button>
                <button className='btn '>{product.qty}</button>
                <button className="btn btn-outline-green" onClick={()=>{addTocart(product)}}><i className="fa fa-plus"></i></button>
                <button className="btn btn-outline-green" onClick={()=>{deletoCart(product)}}><i className=" fa fa-solid fa-trash">
                  </i></button>
                
                </div>
              </div>
              
              
              </>
              </div>
            )
          })}


      
      </div>
        
    </div>
  )
}
