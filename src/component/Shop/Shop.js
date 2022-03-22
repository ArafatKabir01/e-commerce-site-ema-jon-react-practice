import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <main>
            <section className='shop-container'>
            <div className='products-item'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product ={product}
                    ></Product>)
                }
            </div>
            <div>
                <h2>Order Summary</h2>
            </div>
            </section> 

        </main>
    );
};

export default Shop;