import React, { useEffect, useState } from 'react'

import Skeleton from "react-loading-skeleton"
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function

    () {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loding, setLoding] = useState(false)
    let componentmount = true

  

    useEffect(() => {
        // const getProduct = async () => {
        //     setLoding(true)
        //     const response = await fetch("http://fakestoreapi.com/products");
        //     if (componentmount) {
        //         const dat=await response.clone().json()
        //         const data=await response.json()
        //         console.log(dat)
        //         console.log(data)

        //         setData(data)
        //         setFilter(data)
        //         setLoding(false)
        //     }
        //     return () => {
        //         componentmount = false
        //     }
        // }
        
        // getProduct()

        axios.get('http://fakestoreapi.com/products')
        .then(response=>{
            setLoding(true)
            console.log(response)
            setData( response.data)
            setFilter( response.data)
            setLoding(false)

        })
        .catch(err=>{console.log(err)})



    }, [])
    const Loading = () => {
        return (
            <>
              <div className="col-md-3">
                  <Skeleton height={350}/>
              </div>
            </>

        )

    }

    const filterProducr=(cat)=>{
        const updateProduct=data.filter((x)=>x.category===cat)
        setFilter(updateProduct)
    }
    const ShowProducts = () => {
        return (<>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">

                <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducr("men's clothing")}>Men's clothing </button>
                <button className="btn btn-outline-dark me-2" onClick={()=>filterProducr("women's clothing")}>Women's clothing </button>
                <button className="btn btn-outline-dark me-2"onClick={()=>filterProducr("jewelery")}>Jewelery </button>
                <button className="btn btn-outline-dark me-2"onClick={()=>filterProducr("electronics")}>Electronick </button>
            </div>
            {filter.map(product => {
                return (
                    <>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} className="card-img-top" alt={product.title} height="250px"/>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p className="card-text fw-bold">
                                        ${product.price}
                                    </p>
                                    <NavLink to={`products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                        </div>
                        </div>
                    </>
                )
            })}
        </>
        )
    }

    return (
        <div>

            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest product</h1>
                    </div>

                </div>
                <div className="row justify-content-center">
                    {loding ? <Loading /> : <ShowProducts />}

                </div>
            </div>


        </div>
    )
}
