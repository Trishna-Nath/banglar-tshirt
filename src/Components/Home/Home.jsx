import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';



const Home = () => {
    const tshirt = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = ts => {
        const exists = cart.find(tsh => tsh._id === ts._id);

        if (exists) {
           toast('you have already added this t-shirt');
        }
        else {
            const newCart = [...cart, ts];
            setCart(newCart);
        }


    }

    const handleremoveFromCart = id => {
        const remaining = cart.filter(tsh => tsh._id !== id);
        setCart(remaining);
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
                <Cart
                    cart={cart}
                    handleremoveFromCart={handleremoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;