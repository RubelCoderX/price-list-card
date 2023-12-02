import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect( () =>{
        fetch('prices.json')
        .then(res =>res.json())
        .then(data => setPrices(data))
    },[])

    return (
        <div className='mx-12'>
            <h2 className='text-5xl bg-purple-600 font-bold text-center text-purple-400 p-5'>Awesome Affordable Prices</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <PriceCart 
                    key={price.id}
                    price={price}
                ></PriceCart>)
            }
            </div>
        </div>
    );
};

export default PriceList;