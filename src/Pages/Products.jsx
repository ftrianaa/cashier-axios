import React, { useEffect, useState } from "react"
import apiJson from "../Config/Config"
import Cashier from "./Cashier"


export default function Products() {
    const [listProduct, setListProduct] = useState([])
    
    const getProduct = async () => {
        try {
            const res = await apiJson.get('/products')
            const data = await res.data.products
            setListProduct(data)
            //  console.log(res, 'ini res');
        } catch (error) {
            throw (error)
        }
    }
    // console.log(listProduct, 'ini');
    const handleOrder = (e,data,index) =>{
        data.index = index
        console.log(e.target.value, 'init')
        localStorage.setItem('data',e.target.value)
    }
    useEffect(() => { 
        getProduct()
    }, [])
    return (
        <>
        {/* <Cashier
        handleOrder={handleOrder}/> */}
            <div className="listProduct">
                {listProduct.map((data, index) => (
                    <div className="product-border">
                        <div className="product-pict">
                            <img src={data.thumbnail} alt={data.title} />
                        </div>
                        <div className="product-desc">
                            <div className="name">
                                <h1>{data.title}</h1>
                            </div>
                            <div className="desc">
                                <a>{data.description}</a>
                            </div>
                            <div className="price">
                                <a>${data.price}</a>
                            </div>
                        </div>
                        <button value={data.id} onClick={(e)=>handleOrder(e,data,index)}>Add Item</button>
                    </div>
                ))}
            </div>
        </>

    )
}