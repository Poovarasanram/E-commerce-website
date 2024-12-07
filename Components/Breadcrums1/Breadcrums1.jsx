import React from 'react';
import './Breadcrums1.css';
import arrow from '../assets/images/breadcrum_arrow.png';


const Breadcrums1 = (props) => {
    const { product } = props;
    return (
        <div className='breadcrums'>
            HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrums1
