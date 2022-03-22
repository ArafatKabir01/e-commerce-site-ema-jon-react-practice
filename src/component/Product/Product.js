import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,price,stock,ratings,seller,ratingsCount} = props.product;
    return (
        <div> 
            <div className='product-img'>
                <img src={img} alt=''></img>
            </div>
            <div className='product-cart-info'>
                <p className='product-name'>{name}</p>
                <p>Price:{price}</p>

            </div>
        </div>
    );
};

export default Product;