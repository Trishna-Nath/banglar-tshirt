import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>Order  summary: {cart.length}</h2>
            {
                cart.map(ts => <p key={ts._id}>{ts.name}</p>)
            }
        </div>
    );
};

export default Cart;