import React from 'react';
import './Cart.css';

const Cart = ({cart,handleremoveFromCart}) => {

    let message;
    if(cart.length === 0){
        message = <p>please add some products</p>
    }
    else{
        message = <div>
            <h3>borolox</h3>
            <p>Thanks for giving money</p>
        </div>
    }
    return (
        <div>
            <h2 className={cart.length === 1 ? 'blue' : 'red'}>Order  summary: {cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'yellow': 'purple'}`}>something</p>
            {cart.length > 2 ? <span className='orange'>you need more buy products</span> : <span>more buy</span>}
            {message}
            {
                cart.map(ts => <p 
                    key={ts._id}
                    >{ts.name}<button
                     onClick={() => handleremoveFromCart(ts._id)}
                     >X</button></p>)
            }

            {
                cart.length === 2 &&  <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <h4>not three products please add three products</h4>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1.use if else to set a variable that will contain an element, components
 * 2.ternary : condition ? 'for true' : 'false'
 * 3. Logical &&: (if the conditions is true then the next thing will be displayes)
 * 4. Logical || (if  the condition is false then the next thing will be displayed)
 * 5.conditional css class
 * 
 * 1.use ternary
 * 2. ternary inside template string
 **/