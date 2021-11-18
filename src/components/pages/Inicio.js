import React from 'react';
import cafeBackground from '../../img/coffee.jpg'

const Inicio = () => {
    return (
        <div className='w-100'>
            <img className="w-100" src={cafeBackground} alt="Tazas de café" />
        </div>
    );
};

export default Inicio;