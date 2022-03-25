import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton"

export default function

    () {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loding, setLoding] = useState(false)
    let componentmount = true

    useEffect(() => {
        const getProduct = async () => {
            setLoding(true)
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentmount) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoding(false)
            }
            return () => {
                componentmount = false
            }
        }
        getProduct()

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
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt={product.title} height="250px"/>
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                    <p class="card-text fw-bold">
                                        ${product.price}
                                    </p>
                                    <a href="#" class="btn btn-outline-dark">Buy Now</a>
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
