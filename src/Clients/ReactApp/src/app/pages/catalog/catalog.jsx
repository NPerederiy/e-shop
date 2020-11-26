import React from 'react';
import Box from '@material-ui/core/Box';

import Loader from '../../components/loader';
import HeaderPanel from '../../components/header-panel';
import ProductCard from '../../components/product-card';

import './catalog.scss';

const handleAddToCartAction = () => {
    console.log('add to cart');
}

const handleSearchAction = (event) => {
    console.log(event.target.value);
}

const CatalogPage = (props) => {

    // TODO: replace with api call
    const items = [
        {
            id: 0,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '19999',
            img: 'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg',
            discount: '17999'
        },
        {
            id: 1,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '29000',
            img: 'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg',
            discount: '25999'
        },
        {
            id: 2,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '18650',
            img: 'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg',
        },
        {
            id: 3,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '19999',
            img: 'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg',
            discount: '17999'
        },
        {
            id: 4,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '28000',
            img: 'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg',
            discount: '25999'
        },
        {
            id: 5,
            name: 'Lorem Ipsum Dolor Sit Amet',
            price: '18650'
        }
    ];

    return (
        <>
            <HeaderPanel
                text='e-shop'
                searchAction={handleSearchAction}
            />
            <Box id='catalog-page'>
                {items ? (
                    <Box id='catalog-container'>
                        {items.map(item => (
                            <ProductCard
                                key={item.id}
                                addToCartAction = {handleAddToCartAction}
                                {...item}
                            />
                        ))}
                    </Box>
                ) : (
                        <Loader message='Loading components...' />
                    )}
            </Box>
        </>
    );
}

export default CatalogPage;