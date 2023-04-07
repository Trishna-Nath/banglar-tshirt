import React from 'react';

const Cart = ({cart,handleremoveFromCart}) => {
    return (
        <div>
            <h2>Order  summary: {cart.length}</h2>
            {
                cart.map(ts => <p 
                    key={ts._id}
                    >{ts.name}<button
                     onClick={() => handleremoveFromCart(ts._id)}
                     >X</button></p>)
            }
        </div>
    );
};

export default Cart;