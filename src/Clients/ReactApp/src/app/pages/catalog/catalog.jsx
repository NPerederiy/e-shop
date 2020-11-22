import React from 'react';

import { Loader } from '../../components/loader/loader';
import { ProductCard } from '../../components/product-card/product-card';

import './catalog.scss';

const Catalog = () => {

    // TODO: replace with api call
    const items = [
        {
            id:0, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'19999',
            img:'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg', 
            discount:'17999'
        },
        {
            id:1, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'25999', 
            img:'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg', 
            discount:'28000'},
        {
            id:2, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'18650',
            img:'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg', 
        },
        {
            id:3, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'19999', 
            img:'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg', 
            discount:'17999'
        },
        {
            id:4, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'25999', 
            img:'https://i.citrus.ua/imgcache/size_180/uploads/shop/0/2/02b3617419017a1ca52087e5a595ddf9.jpg', 
            discount:'28000'
        },
        {
            id:5, 
            name:'Lorem Ipsum Dolor Sit Amet', 
            price:'18650'
        }
    ];

    return (
        <div id='catalog-page'>
            {items ? (
                <div id='catalog-container'>
                    {items.map(item => (<ProductCard key={item.id} {...item} />))}
                </div>
            ) : (
                    <Loader message='Loading components...' />
                )}
        </div>
    );
}

export { Catalog };