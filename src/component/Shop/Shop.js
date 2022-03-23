import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const eventHendleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart,product]
        setCart(newCart);

    }
    return (
        <main>
            <section className='shop-container'>
            <div className='products-item'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product ={product}
                        eventHendler ={eventHendleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='order-container'>
                <h2>Order Summary</h2>
                <div className='order-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: 0 </p>
                <p>Total Shipping Charge: 0 </p>
                <p>Tax: 0 </p>
                <h3>Grand Total: 0</h3>
                </div>

            </div>
            </section> 

        </main>
    );
};

export default Shop;