import React, { useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const tshirt = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = ts => {
        const newCart = [...cart, ts];
        setCart(newCart);
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
            {
            tshirt.map(ts => <Tshirt
            key={ts._id}
            ts={ts}
            handleAddToCart={handleAddToCart}
            ></Tshirt>)
          }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;