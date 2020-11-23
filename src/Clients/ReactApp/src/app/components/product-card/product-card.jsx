import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import defaultImage from '../../../assets/camera-100.png';
import './product-card.scss';

const ProductCard = (props) => {
    const { name, price, img, discount } = props;

    const currencyCode = 'UAH'; // TODO: take the code from a server
    const addToCartLabel = 'Add to cart'; // TODO: take the label from a localization dictionary

    return (
        <Box id='product-card-container'>
            {img ? (
                <img src={img} className='product-card-image' alt='product-image' />
            ) : (
                    <img src={defaultImage} className='product-card-image placeholder' alt='image-is-missing' />
                )}
            <p className='product-card-header'>{name}</p>
            {discount ? (
                <Box>
                    <Box component="span" className='product-card-price'>{discount}</Box>
                    <Box component="span" className='product-card-price-old'>{price}</Box>
                    <Box component="span" className='product-card-currency-code'>{currencyCode}</Box>
                </Box>
            ) : (
                <Box>
                    <Box component="span" className='product-card-price'>{price}</Box>
                    <Box component="span" className='product-card-currency-code'>{currencyCode}</Box>
                </Box>
            )}
            <Button variant='contained' color='primary' size='large' startIcon={<AddShoppingCartIcon />}>
                {addToCartLabel}
            </Button>
        </Box>
    );
}

export { ProductCard }