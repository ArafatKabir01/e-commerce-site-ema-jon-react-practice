import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}></Cart>


            </div>
            </section> 

        </main>
    );
};

export default Shop;