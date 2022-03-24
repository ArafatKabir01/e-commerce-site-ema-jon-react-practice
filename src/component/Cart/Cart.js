import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <div className='order-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: 0 </p>
                <p>Total Shipping Charge: 0 </p>
                <p>Tax: 0 </p>
                <h3>Grand Total: 0</h3>
            </div>
        </div>
    );
};

export default Cart;