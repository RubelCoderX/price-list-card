import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-10 p-5 rounded-md flex flex-col'>
            <h2 className='text-center'>
                 <span className='text-purple-800 text-5xl font-extrabold'>{price.price}</span>
                 <span className='text-2xl text-white font-bold'>/mon</span>
            </h2>
           <h5 className='text-2xl my-5 font-bold text-center'> {price.name}</h5>
           <p className='underline font-bold text-white'>Features:</p>
           {
            price.features.map((feature, idx )=> <Feature 
                key={idx}
                feature={feature}

            ></Feature>)
           }
           <button className='w-full hover:bg-purple-900 bg-purple-500 py-2 px-4 rounded-md text-white mt-auto'>Buy Now</button>
        </div>
    );
};

export default PriceCart;