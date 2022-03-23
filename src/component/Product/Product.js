import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,stock,ratings,seller,ratingsCount} = props.product;
    return (
        <div className='product-data'> 
            <div className='product-img'>
                <img src={img} alt=''></img>
            </div>
            <div className='product-cart-info'>
                <h6 className='product-name'> {name}</h6>
                <p>Price: ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings}</small></p> 
            </div>
            
                <button onClick={() => props.eventHendler(props.product)} className='crt-button'><p>Add to Cart</p> <i class="fa-solid fa-cart-plus"></i></button>
            

        </div>
    );
};

export default Product;