import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd) => total + prd.price, 0);
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;

    };
    let  shipingCost = 0;
    if(total > 100){
        shipingCost = 0;
    }
    else if(total > 50){
        shipingCost = 2.69;
    }
    else if(total > 15){
        shipingCost = 4.50;
    }
    const taxt =  total / 10;
    const grandTotal = (total + shipingCost + Number(taxt)).toFixed(2)
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items Ordered: {cart.length}</p>
             <p>Product Price: ${formatNumber(total)}</p>
            <p><small>Shpping Cost: ${shipingCost}</small></p>
            <p><small>Tax + Vat : ${formatNumber(taxt)}</small></p>
            <p>Total Price: ${grandTotal}</p>
       </div>
    );
};  

export default Cart;