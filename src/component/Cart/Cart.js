import React from 'react';

const Cart = ({cart}) => {
    let total = 0;
    let shippingCharge = 0;
    for(const product of cart){
         total = total + product.price;
         shippingCharge = shippingCharge + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const taxAmmount= parseFloat(tax);
    const grandTotal = total + shippingCharge + taxAmmount;
    return (
        <div>
            <h2>Order Summary</h2>
            <div className='order-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:${total} </p>
                <p>Total Shipping Charge: ${shippingCharge} </p>
                <p>Tax: ${tax} </p>
                <h3>Grand Total: ${grandTotal}</h3>
            </div>
        </div>
    );
};

export default Cart;