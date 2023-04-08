import React from 'react';
import Cousim from '../Cousin/Cousim';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Cousim>Abir</Cousim>
                <Cousim hasFriend={true} ring={ring}>nibir</Cousim>
            </section>
        </div>
    );
};

export default Aunty;