import React from 'react';
import './Tshirt.css';

const Tshirt = ({ts, handleAddToCart}) => {
    const {picture,name,price} = ts;

    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price{price}</p>
            <button onClick={() => handleAddToCart(ts)}>Buy now</button>
        </div>
    );
};

export default Tshirt;