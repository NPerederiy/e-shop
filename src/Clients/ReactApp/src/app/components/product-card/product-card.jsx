import React from 'react';

import defaultImage from '../../../assets/camera-100.png';
import './product-card.scss';

const ProductCard = (props) => {
    const { name, price, img, discount } = props;

    return (
        <div id='product-card-container'>
            {img ? (
                    <img src={img} className='product-card-image' alt='product-image' />
                ) : (
                    <img src={defaultImage} className='product-card-image placeholder' alt='image-is-missing' />
                )}
            <p className='product-card-header'>{name}</p>
            {discount ? (
                <div>
                    <span className='product-card-price'>{discount}</span>
                    <span className='product-card-price-old'>{price}</span>
                </div>
            ) : (
                    <span className='product-card-price'>{price}</span>
                )}
            <button>Add to cart</button>    
        </div>
    );
}

export { ProductCard }