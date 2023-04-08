import React from 'react';
import Cousim from '../Cousin/Cousim';

const Uncle = () => {
    return (
        <div>
           <h2>Uncle
            </h2> 
           <section className='flex'>
           <Cousim>Nabil</Cousim>
        <Cousim>Nabila</Cousim>
           </section>
        </div>
    );
};

export default Uncle;